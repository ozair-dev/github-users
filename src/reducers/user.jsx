import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import swal from 'sweetalert';

// middleware to get user's data
const fetchUser = createAsyncThunk('user/fetchUser', async (text) => {
  // getting user info
  const userRes = await fetch(`https://api.github.com/users/${text}`);
  const {
    name,
    login: username,
    html_url: url,
    avatar_url: avatar,
    followers,
    public_repos: reposCount,
  } = await userRes.json();
  // getting repos info
  const reposRes = await fetch(`https://api.github.com/users/${text}/repos`);
  const repos = await reposRes.json();
  return {
    user: {
      name,
      username,
      avatar,
      url,
      followers,
      reposCount,
    },
    repos: repos
      .sort((pre, next) => new Date(next.created_at) - new Date(pre.created_at))
      .slice(0, 4)
      .map(({ name, html_url: url }) => ({ name, url })),
  };
});

const toggleNight = createAsyncThunk('user/toggledNight', async (arg, thunkApi) => {
  const { night } = thunkApi.getState();
  localStorage.setItem('night', !night)
});

const userSlice = createSlice({
  name: 'user',
  initialState: { status: 'idle', night: false },
  reducers: {
    resetSearch: (state, action) => {
      delete state.user;
      delete state.repos;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => void(state.status = 'loading'))
      .addCase(fetchUser.fulfilled, (state, action) => ({ ...state, status: 'idle', ...action.payload }))
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'idle'
        swal('No results were found for this username');
      })
      .addCase(toggleNight.fulfilled, (state, action) => {
        state.night = !state.night;
      });
  },
});

export const { resetSearch } = userSlice.actions;
export { fetchUser, toggleNight };
export default userSlice.reducer;

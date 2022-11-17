// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



// export const getPosts = createAsyncThunk(
//   'posts/getPosts',
//   async ({ dispatch, getState }) => {
//     // const { todos } = getState()
//     // console.log({ todos })
//     // you can dispatch any action from here!
//     // dispatch(del(2))
//     return fetch(
//       `https://jsonplaceholder.typicode.com/todos`
//     ).then((res) => res.json())
//   }
// )

// const postsSlice = createSlice({
//   name: 'posts',
//   initialState: {
//     title:[],
//     list: [],
//     status: null,
//   },
//   reducers: {},
//   extraReducers: {
     
    
//     [getPosts.pending]: (state, action) => {
//       state.status = 'loading'
//     },
//     [getPosts.fulfilled]: (state, { payload }) => {
//       state.list = payload
//       console.log('Inside POSTS')
//       console.log(state.title)
//       console.log(state.list[0]['title'])
//       // state.title =  [...state.title, state.list[0]['title']]
//       state.title =  [...state.title, {message:state.list[0]['title'], type:'bot'}]
      
//       console.log(state.title[0]['message'])
//       // console.log(state.title[0])
//       console.log('EXITING POST')
//       state.status = 'success'
//     },
//     [getPosts.rejected]: (state, action) => {
//       state.status = 'failed'
//     },
//   },
// })

// export default postsSlice.reducer
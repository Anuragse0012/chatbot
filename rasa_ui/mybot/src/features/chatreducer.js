import { createSlice } from "@reduxjs/toolkit";

// import { getPosts } from './postsSlice'

// import axios from "axios"

const initialState = {
    messages: [ ],
}



const chatSlice = createSlice({
    name: 'chat',
    initialState ,
    reducers: {
        inputSuccess(state, action){
            state.messages =  [...state.messages, {message:action.payload, type:'user'}]

            // let final = '';
            // const getData=async()=>{
            //     const response=await fetch("https://jsonplaceholder.typicode.com/todos");
                
            //     const jsonData= await response.json();
            //     console.log('Inside REDCUER')
            //     console.log('2')
            //     final = jsonData[0]['title'];
            //     console.log(final)
            //     console.log('1')
            //     console.log(jsonData[0]['title'])
            //     console.log('Final')
            //     console.log(final)

            //     state.messages =  [...state.messages, {message:final, type:'bot'}]
            //     console.log(state.messages)

            //     // setText(final);
            //     return final;
            // }
            // console.log('Printing FINAL')
            // console.log(final);
            // console.log('Printing TEMP')
            // const temp = getData();
            // console.log(temp)

            

            
                // const getData = async () => {
                //   try {
                //     const response = await axios.get(
                //       `https://jsonplaceholder.typicode.com/todos`
                //     );
                //     console.log('Inside axios')
                //     console.log(response.data[0]['title']);
                //     state.messages =  [...state.messages, {message:response.data[0]['title'], type:'bot'}]
                //     console.log('Exiting axios')
                   
                //   } catch (err) {
                //     console.log(err)
                    
                //   } finally {
                    
                //   }
                // };
                // getData();
                // getPosts()

        }, 
        messageSuccess(state, action){



            state.messages =  [...state.messages, {message:action.payload, type:'bot'}]
        }, 
    }
})

export const { inputSuccess, inputFail, messageSuccess, messageFail } = chatSlice.actions

export default chatSlice.reducer
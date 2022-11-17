import React, { useEffect, useState, useRef } from 'react';
import { connect } from "react-redux";
import { styles } from '../../styles'
import 'material-icons/iconfont/material-icons.css';
import '../../App.css';
import './Chatbot.css';
import {IoMdSend}  from 'react-icons/io';
import {BiBot,BiUser} from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { inputSuccess, messageSuccess } from '../../features/chatreducer';
import ReactScrollableFeed from 'react-scrollable-feed';

const Chatbot = ({ messages }) => {

    const dispatch = useDispatch();
    console.log('PRINTING TITLE')

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const [text, setText] = useState("");
    const [clickType, setClickType] = useState(false);
    const [triggerInput, setTriggerInput] = useState(false);

    const endOfMessages = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)
        console.log('Sending Email', email)
    }

    const handleButton = async (e) => {
        console.log('Printing Enter keycode')
        console.log(e)
        dispatch(inputSuccess(e));
                let temp=""
                const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json',
                                                'charset':'UTF-8',
                                            },                                        credentials: "same-origin",
                                        body: JSON.stringify({ "sender": "ganesha", "message": e  }),
                })

                const jsonData= await response.json();
                console.log('2')
                const tempa = jsonData[0];
                const final = tempa["text"];
                temp=final;
                console.log('PRINTING TITLE INSIDE ASYNC')
                console.log(temp)

            console.log('Printing TEXT')
            console.log(text)

          dispatch(messageSuccess(temp));
          setText("");

      };



      //  Function that handles user submission
      const handleClick = async (e) => {
        //scrollToBottom()
        console.log('Printing Enter keycode')
        console.log(e)
        const code = e.keyCode || e.which;

        if (code === 13) {
          dispatch(inputSuccess(text));
                let temp=""
                const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json',
                                                'charset':'UTF-8',
                                            },
                                        credentials: "same-origin",
                                        body: JSON.stringify({ "sender": "ganesha", "message": text }),
                })

                const jsonData= await response.json();
                console.log('2')
                const tempa = jsonData[0];
                const final = tempa["text"];
                temp=final;
                console.log('PRINTING TITLE INSIDE ASYNC')
                console.log(temp)

            console.log('Printing TEXT')
            console.log(text)

          dispatch(messageSuccess(temp));
          setText("");
        }
      };

    if (!loading) { 
        return(
            <div
                style={{
                    ...styles.emailFormWindow,
                    ...{
                        height: '100%' ,
                        opacity:  '1' ,
                    }
                }}
            >
            <div style={{ height: '0px' }}>
                <div style={styles.stripe} />
            </div>
           
            <div 
                className='transition-5'
                style={{
                    ...styles.loadingDiv,
                    ...{ 
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '0.33' : '0',
                    }
                }}
            />
        
            <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center'}}>
                <div style={ styles.topText }>
                    Aurora support
                </div>
               
                <form
                    onSubmit={e => handleSubmit(e)}
                    style={{ position: 'relative', width: '100%', top:'40%' }}
                >
                    <input
                        style={styles.emailInput}
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Your Email'
                    />
                </form>
            
                <div style={styles.bottomText}>
                    Enter your email <br /> to get started.
                </div>           
            </div>
        </div>
        )
    }
    return(
          
            <div>
               
                    <div style={{postion: 'absolute', textAlign: 'center', width: '100%', height: '50px', backgroundColor: '#7a39e0', color: 'white', fontSize: '36px', top: '5%',padding: '10px'}}>
                        Aurora support
                    </div>
                    <div style={styles.historyContainer}>
                    <ReactScrollableFeed>
                        {messages.length === 0  ? "" : (messages.map((msg) => { 
                            if(msg.type == "user"){
                                return <div style={styles.userBackground}>
                                 <p style={styles.userMessage}>{msg.message}</p>
                                 <BiUser className="userIcon" />
                            </div> }
                            else if(msg.type == "bot"){
                                if(msg.message.indexOf("medical") !== -1) {
                                //if(clickType){
                                    return <div>
                                        <BiBot className="botIcon"  />
                                        <p style={styles.botMessage}>{msg.message}</p>
                                        <button className="botButton" onClick={(e) => handleButton("diabetes")} value="diabetes">diabetes</button>
                                        <button className="botButton" onClick={(e) => handleButton("cancer")} value="cancer">cancer</button>
                                        <button className="botButton" onClick={(e) => handleButton("liver")} value="liver">liver</button>
                                        </div>
                                }
                                else if(msg.message.indexOf("current") !== -1) {
                                //if(clickType){
                                    return <div>
                                        <BiBot className="botIcon"  />
                                        <p style={styles.botMessage}>{msg.message}</p>
                                        <button className="botButton" onClick={(e) => handleButton("bedridden")} value="bedridden">bedridden</button>
                                        <button className="botButton" onClick={(e) => handleButton("wheelchair")} value="wheelchair">wheelchair</button>
                                        </div>
                                }
                                else if(msg.message.indexOf("time-frame") !== -1) {
                                //if(clickType){
                                    return <div>
                                        <BiBot className="botIcon"  />
                                        <p style={styles.botMessage}>{msg.message}</p>
                                        <button className="botButton" onClick={(e) => handleButton("24*7")} value="24*7">24/7</button>
                                        <button className="botButton" onClick={(e) => handleButton("5 days a week")} value="5 days a week">5 days a week</button>

                                        </div>
                                }
                                else if(msg.message.indexOf("package") !== -1) {
                                //if(clickType){
                                    return <div>
                                        <BiBot className="botIcon"  />
                                        <p style={styles.botMessage}>{msg.message}</p>
                                        <button className="botButton" onClick={(e) => handleButton("1k")} value="1k">1k</button>
                                        <button className="botButton" onClick={(e) => handleButton("2k")} value="2k">2k</button>
                                        </div>
                                }
                                else if(msg.message.indexOf("Nurse 1") !== -1) {
                                //if(clickType){
                                    return <div>
                                        <BiBot className="botIcon"  />
                                        <p style={styles.botMessage}>{msg.message}</p>
                                        <button className="botButton" onClick={(e) => handleButton("nurse 1")} value="nurse 1">Nurse 1</button>
                                        <button className="botButton" onClick={(e) => handleButton("nurse 2")} value="nurse 2">Nurse 2</button>
                                        <button className="botButton" onClick={(e) => handleButton("nurse 3")} value="nurse 3">Nurse 3</button>
                                        <button className="botButton" onClick={(e) => handleButton("nurse 4")} value="nurse 4">Nurse 4</button>
                                        <button className="botButton" onClick={(e) => handleButton("nurse 5")} value="nurse 5">Nurse 5</button>
                                        </div>
                                }
                                else if(msg.message.indexOf("submitted") !== -1) {
                                //if(clickType){
                                    return <div>
                                        <BiBot className="botIcon"  />
                                        <p style={styles.botMessage}>{msg.message}</p>
                                        <button className="botButton" onClick={(e) => handleButton("confirm")} value="confirm">confirm</button>
                                        <button className="botButton" onClick={(e) => handleButton("decline")} value="decline">decline</button>
                                        </div>
                                }
                                else{
                                    return <div style={styles.botBackground}>
                                        <BiBot className="botIcon"  />
                                        <p style={styles.botMessage}>{msg.message}</p>
                                        </div>
                                }
                            }
                            else {
                                return 'Oops, Something went wrong'
                            }

                        }))}
                        
                        
                         <div ref={endOfMessages}></div>
                    </ReactScrollableFeed>
                    </div>



                    <input
                             style={styles.chatBottom}
                             className="box"
                             value={text}
                             onChange={e => setText(e.target.value)}
                             onKeyPress={handleClick}
                    />
                    <button type="submit" style={styles.chatSubmit} id="chat-submit" ><i className="material-icons">send</i></button>
                  
                
             </div>
    )

}

function mapStateToProps(state) {
    const { messages } = state.chat.chatReducer
    return { messages }
  }
  
  export default connect(mapStateToProps)(Chatbot)
  
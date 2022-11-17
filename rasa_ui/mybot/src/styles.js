export const styles = {
    chatWithMeButton: {
        cursor: 'pointer',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        borderRadius: '50%',
        // Background 
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXor1q7TqVqcYpdrMfhO4bZQAu-dg9i_Yp3UolaAByoGxW-h3wHkpC7DswOBWBsRMIuVI&usqp=CAU)`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '84px',
        // Size
        width: '84px',
        height: '84px',
    },
    avatarHello: { 
        // Position
        position: 'absolute', 
        left: 'calc(-100% - 44px - 28px)', 
        top: 'calc(50% - 24px)', 
        // Layering
        zIndex: '10000',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        padding: '12px 12px 12px 16px',
        borderRadius: '24px', 
        // Color
        backgroundColor: '#f9f0ff',
        color: 'black',
    },
    supportWindow: {
        // Position
        position: 'fixed',
        bottom: '116px',
        right: '24px',
        // Size
        width: '420px',
        height: '530px',
        maxWidth: 'calc(100% - 48px)',
        maxHeight: 'calc(100% - 48px)',
        backgroundColor: 'white',
        // Border
        borderRadius: '12px',
        border: `2px solid #7a39e0`,
        overflow: 'hidden',
        // Shadow
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
    },
    emailFormWindow: { 
        width: '100%',  
        overflow: 'hidden',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
    },
    stripe: {
        position: 'relative',
        top: '-45px',
        width: '100%',
        height: '150px',
        backgroundColor: '#7a39e0',
        transform: 'skewY(0deg)',
    },
    topText: { 
        position: 'relative',
        width: '100%', 
        top: '7%', 
        color: 'white', 
        fontSize: '24px', 
        fontWeight: '600',
    },
    emailInput: { 
        width: '66%',
        textAlign: 'center',
        outline: 'none',
        padding: '12px',
        borderRadius: '12px',
        border: '2px solid #7a39e0',
    },
    bottomText: { 
        position: 'absolute', 
        width: '100%', 
        top: '60%', 
        color: '#7a39e0', 
        fontSize: '24px', 
        fontWeight: '600' 
    },
    loadingDiv: { 
        position: 'absolute', 
        height: '100%', 
        width: '100%', 
        textAlign: 'center', 
        backgroundColor: 'black',
    },
    loadingIcon: { 
        color: '#7a39e0', 
        position: 'absolute', 
        top: 'calc(50% - 51px)', 
        left: 'calc(50% - 51px)',  
        fontWeight: '600',
    },
    chatEngineWindow: {
        width: '100%',  
        backgroundColor: '#fff',
    },
    chatBottom: {
        position: 'absolute',
        bottom: '0px',
        height: '26.5px',
        width: '85%',
        // textAlign: 'right',
        outline: 'none',
        padding: '12px',
        // borderRadius: '12px',
        border: '1px solid #7a39e0',
        borderRight: 'none',
        borderLeft: 'none',
        borderBottom: 'none',
        wordWrap: 'normal',
    },
    chatMiddle: {

    },
    chatTop: {
        postion: 'absolute', 
        textAlign: 'center', 
        width: '100%', 
        height: '150px',
        backgroundColor: '#7a39e0',
        color: 'white',
        fontSize: '36px',
        top: '5%',
        padding: '10px',

    },
    chatInput: {
        background: '#f4f7f9',
        bottom: '0px',
         width:'100%',
         position:'relative',
         height:'40px',
         padding:'10px 50px 10px 15px',
         border:'none',
         resize:'none',
         outline:'none',
         border:'1px solid #ccc',
         color:'#888',
         borderTop :'none',
         borderBottomRightRadius :'5px',
         borderBottomLeftRadius:'5px',
         overflow:'hidden'
    },
    chatSubmit: {
        position:'absolute',
        bottom:'6px',
        right:'0px',
        background: 'white',
        boxShadow:'none',
        borderTop:'1px solid #7a39e0',
        borderBottom: 'none',
        borderRight: 'none',
        borderLeft: 'none',
//   borderTop: 'none',
//   borderRadius:'50%',
// padding: '12px',
        color:'#7a39e0',
        width:'45px',
        height:'45px',
        zIndex: '1'
    },
    historyContainer: {
        width: '100%',
        height:'400px',
        overflow: 'hidden',
        color: 'white',
        overflow: 'hidden scroll',
        margin: '5px',
        padding: '0 20px 0 0',
        
      },
      userBackground: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      botBackground: {
        display: 'flex',
        justifyContent: 'flex-start',
      },
      userMessage: {
        textAlign: 'right',
        backgroundColor: '#a376ea',
        padding: '15px',
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        //whiteSpace:'pre',
        // borderBottomRightRadius:
      },
      botMessage: {
        textAlign: 'left',
        backgroundColor: '#7a39e0',
        padding: '15px',
        marginTop: '2px',
        marginLeft: '10px',
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        // borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        whiteSpace:'pre-wrap',
      },

      
}
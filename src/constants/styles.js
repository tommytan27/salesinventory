const styles = {
    mainPage: {
        height: '100%'
    },
    pageTable: {
        paddingLeft: '1%',
        paddingRight: '1%'
    },
    page:{
        left: {
            position: 'relative',
            paddingTop: '4%',
            width: '60%',
            height: '100%',
            backgroundColor: 'white',
            float: 'left'
        },
        right: {
            width: '40%',
            height: '100%',
            float: 'left',
            backgroundColor: '#d6e2f0'
        },
        rightShopping: {
            width: '40%',
            height: '100%',
            float: 'left',
            backgroundColor: 'rgb(213,249,249)'
        },
        main: {
            position: 'relative',
            paddingTop: '4%',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            float: 'left'
        },
        mainNoLogo: {
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            float: 'left'
        }
    },
    paper: {
        left: {
            padding: '3%',
            paddingBottom: '0.75%',
            margin: '3%'
        },
        leftGuide: {
            padding: '3%',
            backgroundColor: 'rgba(169,244,240,0.3)',
            margin: '3%'
        },
        main: {
            padding: '3%',
            margin: '1.5%',
            height: '83%',
            backgroundColor: 'rgba(169,244,240,0.3)',
        },
        mainTextLarge: {
            fontSize: '7em',
            color: 'rgb(0,254,103)',
            textAlign: 'center',
            margin: '8%'
        },
        mainText: {
            fontSize: '4em',
            color: 'rgb(0,254,103)',
            textAlign: 'center',
            margin: '1%'
        },
        leftText: {
            fontSize: '4em',
            color: 'rgb(0,254,103)',
            textAlign: 'center',
            margin: '4%'
        }
    },
    valueLabel: {
        paddingTop: '7px'
    },
    barcodeButton: {
        paddingLeft: '0px'
    },
    logo: {
        left: {
            position: 'absolute',
            width: '30%',
            left: '5px',
            top: '5px'
        },
        main: {
            position: 'absolute',
            width: '18%',
            left: '5px',
            top: '5px'
        }
    },
    welcome: {
        left: {
            position: 'absolute',
            right: '3%',
            top: '10px',
            fontSize: '1.5em'
        },
        main: {
            position: 'absolute',
            right: '10px',
            top: '10px',
            fontSize: '1.5em'
        }
    },
    paragraph: {
        fontSize: '1em'
    },
    dialog: {
        width: 'auto'
    },
    flatButton: {
        add: {
            color: 'blue'
        },
        edit: {
            color: 'orange'
        },
        delete: {
            color: 'red'
        },
        save: {
            color: 'green'
        }
    },
    fontIcon: {
        done: {
            color: 'green'
        },
        clear: {
            color: 'red'
        },
        veganIcon: {
            color: 'green'
        },
        adminMenuButton: {
            fontSize: '8em'
        },
        shoppingSearch: {
            color: 'rgba(0,217,87,0.75)',
            fontSize: '10em'
        },
        rightArrow: {
            color: 'rgb(0,254,103)',
            fontSize: '7em',
            position: 'absolute',
            right: '15px',
            top: '40%'
        },
        customerCredit: {
            color: 'green',
            paddingTop: "3.5%"
        },
        customerCreditContainer: {
            width: "40px",
            height: "40px",
            padding: "10px",
            display: "inline"
        }
    },
    iconButton: {        
        removeRecord: {
            color: 'red',
            paddingTop: '3.5%'
        },
        changeUserButton: {
            backgroundColor: 'rgba(0,217,87,0.75)',
            color: 'white'
        },
        adminMenuButton: {
            borderRadius: "90%",
            border: "none",
            outline: "none",
            margin: "3%"
        },
        barcodeButton: {
            paddingRight: "0px",
            paddingLeft: "30px"
        },
        searchButton: {
            paddingRight: "30px",
            paddingLeft: "0px"
        }
    },
    floatingButton: {
        left: {
            top: 'auto',
            right: 'auto',
            left: '1.5%',
            bottom: '2%',
            position: 'fixed'
        },
        right: {
            top: 'auto',
            left: 'auto',
            right: '1.5%',
            bottom: '2%',
            position: 'fixed'
        },
        internalRight: {
            top: 'auto',
            left: 'auto',
            right: '1.5%',
            bottom: '2%',
            position: 'absolute'
        },
        leftMainPage: {
            backgroundColor: 'rgba(0,217,87,0.75)',
            color: 'white',
            top: 'auto',
            right: 'auto',
            left: '1.5%',
            bottom: '2%',
            position: 'fixed'
        },
        rightMainPage: {
            backgroundColor: 'rgb(0,254,103)',
            top: 'auto',
            left: 'auto',
            right: '1.5%',
            bottom: '2%',
            position: 'fixed'
        }
    },
    shoppingCart: {
        fontSize: '0.8em',
        color: 'black'
    },
    itemCounter: {
        padding: '1%',
        paddingLeft: '2%',
        fontSize: '2.5em',
        fontWeight: 'bold',
        height: '9%'
    },
    completeButton: {
        enabled: {
            bottom: '0px',
            right: '0px',
            position: 'fixed',
            fontWeight: 'bold',
            fontSize: '3em',
            width: '40%',
            height: '9%',
            paddingTop: '0px'
        },
        disabled: {
            backgroundColor: 'rgb(171,171,171)',
            bottom: '0px',
            right: '0px',
            position: 'fixed',
            fontWeight: 'bold',
            fontSize: '3em',
            width: '40%',
            height: '9%',
            paddingTop: '0px'
        }
    },
    payButton: {
        enabled: {
            backgroundColor: 'rgba(0,217,87,0.75)',
            color: 'white',
            bottom: '0px',
            right: '0px',
            position: 'fixed',
            fontWeight: 'bold',
            fontSize: '3em',
            width: '40%',
            height: '9%',
            paddingTop: '0px'
        },
        disabled: {
            backgroundColor: 'rgb(171,171,171)',
            color: 'white',
            bottom: '0px',
            right: '0px',
            position: 'fixed',
            fontWeight: 'bold',
            fontSize: '3em',
            width: '40%',
            height: '9%',
            paddingTop: '0px'
        }
    },
    record:{
        left: {
            float: 'left',
            textAlign: 'left',
            width: '70%',
            paddingLeft: '1%',
            fontSize: '1.5em'
        },
        right: {
            float: 'left',
            textAlign: 'right',
            width: '30%',
            paddingRight: '1%',
            paddingTop: '2%',
            fontSize: '1.5em'
        },
        secondLeft: {
            float: 'left',
            textAlign: 'left',
            width: '70%',
            paddingLeft: '10%',
            fontSize: '1.5em'
        }
    },
    recordsBox: {
        overflowY: 'scroll',
        height: '82%'
    },
    recordTableBox: {
        overflowY: 'scroll',
        height: '30%'
    },
    adminButtonRow1: {
        textAlign: "center",
        padding: "1%",
        paddingBottom: "0px",
        marginTop: "3%"
    },    
    adminButtonRow2: {
        textAlign: "center",
        padding: "1%",
        paddingBottom: "0px",
        marginBottom: "3%"
    }
};

export default styles;
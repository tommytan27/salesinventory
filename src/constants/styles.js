const styles = {
    page: {
        paddingLeft: '1%',
        paddingRight: '1%'
    },
    mainPage: {
        height: '100%'
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
        }
    },
    paperLeftPart: {
        padding: '3%',
        paddingBottom: '0.75%',
        margin: '3%',
        top: '-150px'
    },
    valueLabel: {
        paddingTop: '7px'
    },
    barcodeButton: {
        paddingLeft: '0px'
    },
    logo: {
        position: 'absolute',
        width: '30%',
        left: '5px',
        top: '5px'
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
        bottom: '0px',
        right: '0px',
        position: 'fixed',
        fontWeight: 'bold',
        fontSize: '3em',
        width: '40%',
        height: '9%',
        paddingTop: '0px'
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
    removeRecord: {
        color: 'red',
        paddingTop: '3.5%'
    },
    recordsBox: {
        overflowY: 'scroll',
        height: '82%'
    }
};

export default styles;
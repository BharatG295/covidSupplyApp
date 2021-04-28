import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 600,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

const getIcon = () => {
    //GetIconCodeHere
};

function NavCard(props) {
    const classes = useStyles();
    const icon = getIcon();
    return(
        <Button>
            <Card className={classes.root}>
                <CardContent>
                    {props.type}
                </CardContent>
            </Card>
        </Button>
    )
}

export default NavCard;
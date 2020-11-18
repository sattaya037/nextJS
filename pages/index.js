//pages/index.js
import Layout from '../components/layout';

import fetch from 'isomorphic-unfetch';
// import { Card,CardDeck ,CardColumns,Row,Col,Image  } from 'react-bootstrap';
import {Grid,GridList,GridListTile,GridListTileBar,Avatar} from '@material-ui/core';

var liff ;
  
    if (typeof window !== "undefined") {
         liff = window.liff;

        liff
            .init({
                liffId: "1653935174-baeNzNDB" // Use own liffId
            })
            .then(() => {
                // Start to use liff's api
                if (!liff.isLoggedIn()) {
                    liff.login();

                  }else{
                    initializeApp();

                  }
            })
            .catch((err) => {
                console.log(err.code, err.message);
            });
    
    
      }


function initializeApp() {
    var a =  document.getElementById("image");
    console.log(a)
    liff.getProfile()
        .then(profile => {
            console.log(profile)
            document.getElementById("head").innerHTML =profile.displayName;
            document.getElementById("head").style.textAlign = "left";
            // document.getElementById("image").src = profile.pictureUrl;
         
            // document.getElementById("image").innerHTML =profile.displayName;


        })
        .catch((err) => {
            console.log('error', err);
        });
}





// const liff = window.liff;
const handleClick = (e) =>  {
    console.log(e)
    console.log(liff)
}


const Index = ({musicData}) => {
    console.log(musicData)
    return (
        <Layout>
            <div>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Avatar id="image" alt="Remy Sharp" src="" />
                </Grid>
                <Grid item xs={10}>
                     <h2 id="head"></h2>
                </Grid>
                <Grid item xs={12}>
                <h3>Songs List</h3>
                </Grid>
                <GridList cellHeight={160} cols={3}>
                    {musicData.map((item,i) => (
                         <GridListTile key={item._id}>
                         <img src={item.poster_url} alt={item.title} />
                         <GridListTileBar
                           title={item.title}
                           subtitle={<span>by: {item.composer}</span>}
                        //    actionIcon={
                        //      <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                        //        <InfoIcon />
                        //      </IconButton>
                        //    }
                         />
                       </GridListTile>
                    ))}
                </GridList>
            </Grid>
                {/* <h1 id="head"></h1>
                <h3>Songs List</h3>
                <Row>
                    <Col sm={8}><h1 id="head"></h1></Col>
                    <Col sm={4}> <Image id ="image" src=""  roundedCircle  /></Col>
                </Row>
                <Row>

                <CardColumns>
                {musicData.map((item, i) => {
                   return (
                   <Card  key={i}  onClick={handleClick}>
                       <Card.Img variant="top" />
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.intro}</Card.Text>
                        <Card.Footer><small className="text-muted">{item.time_released}</small>  </Card.Footer>


                   </Card >
                   
                   )
               })}
                </CardColumns>
                </Row>            */}
            </div>
        </Layout>
    );
}
Index.getInitialProps = async function() {
    const response = await fetch(`https://www.what-song.com/api/recent-movies`);
    const result = await response.json();

    return { musicData: result.data}
    
}


export default Index;
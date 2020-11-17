//pages/index.js
import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import { Card,CardDeck ,CardColumns    } from 'react-bootstrap';

if (typeof window !== "undefined") {

    liff
        .init({
            liffId: "1653935174-baeNzNDB" // Use own liffId
        })
        .then(() => {
            // Start to use liff's api
            if (!liff.isLoggedIn()) {
                liff.login();
              }
        })
        .catch((err) => {
            // Error happens during initialization
            console.log(err.code, err.message);
        });


  }

  function myFunction() {
    liff.getProfile()
    .then(profile => {
    return profile;
    })
    .catch((err) => {
    console.log('error', err);
    return false;
    });
  }



// const liff = window.liff;
const handleClick = (e) =>  {

}


const Index = ({musicData,getProfile}) => {
    liff.getProfile()
    .then(profile => {
        console.log(profile)
    })
    .catch((err) => {
    console.log('error', err);
    
    });

    return (
        <Layout>
            <div>
                <h1>{getProfile}</h1>
                <h3>Songs List</h3>
                <CardColumns>
                {musicData.map((item, i) => {
                   return (
                   <Card  key={i}  onClick={handleClick}>
                       {/* <Card.Img   src={item.poster_url} */}
                       <Card.Img variant="top" />
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.intro}</Card.Text>
                        <Card.Footer><small className="text-muted">{item.time_released}</small>  </Card.Footer>


                   </Card >
                   
                   )
               })}
                </CardColumns>
           
            </div>
        </Layout>
    );
}
Index.getInitialProps = async function() {
    const response = await fetch(`https://www.what-song.com/api/recent-movies`);
    const result = await response.json();
    // liff.init({ liffId: '1653935174-baeNzNDB' });

    // await liff.init({ liffId: '1653935174-baeNzNDB' }).catch(err=>{throw err});
    // if (liff.isLoggedIn()) {
    //   let getProfile = await liff.getProfile();
    //   this.setState({
    //     name: getProfile.displayName,
    //     userLineID: getProfile.userId,
    //     pictureUrl: getProfile.pictureUrl,
    //   });
    // }else{
    //   liff.login();
    // }

    return { musicData: result.data}
}


export default Index;
//pages/index.js
import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import { Card,CardDeck ,CardColumns    } from 'react-bootstrap';


const handleClick = (e) =>  {
    console.log(e);
    debugger
}

const Index = ({musicData}) => {
    console.log(musicData)
    return (
        <Layout>
            <div>
                <h1>Welcome to Next Application</h1>
                <h3>Songs List</h3>
                <CardColumns>
                {musicData.map((item, i) => {
                   return (
                   <Card  key={i}  onClick={handleClick}>
                       {/* <Card.Img  src={i}>{item.poster_url}</Card.Img> */}
                       <Card.Img variant="top" src={item.poster_url} />
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
    return { musicData: result.data }
}
export default Index;
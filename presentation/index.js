// Import React
import React from 'react';
import * as _ from 'lodash';

// Import Spectacle Core tags
import {
    Code,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Slide,
    Spectacle,
    Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom component
// import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
    react: require('../assets/react-logo-white.svg')
};

preloader(images);

const theme = createTheme(
    {
        primary: '#1976D2' //'#00d8ff'
    },
    {
        primary: 'Roboto, sans-serif'
    }
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle
                theme={theme}>
                <Deck
                    transition={['slide']}
                    transitionDuration={500}
                    progress="pacman"
                    controls={true}>
                    <Slide align="center center" notes='React!' id={_.uniqueId('slide_')}>
                        <Image src={images.react} height="200px"/>
                        <Heading size={2} textColor="white">
                            Introduction to React
                        </Heading>
                        <Text textColor="white" margin="16px" textSize="24px">
                            @yashdalfthegray
                        </Text>
                    </Slide>
                    <Slide align="center center" id={_.uniqueId('slide_')}>
                        <Text textColor="white">
                            A library for building user interfaces.
                        </Text>
                    </Slide>
                    <Slide align="center center" id={_.uniqueId('slide_')}>
                        <Heading size={4} textColor="white">
                            Basic Syntax
                        </Heading>
                        <CodePane
                            margin="32px"
                            lang="javascript"
                            source={require("raw!../assets/basic-syntax.example")} />
                    </Slide>
                    <Slide align="center center" id={_.uniqueId('slide_')}>
                        <Heading size={4} textColor="white" margin="32px">
                            JSX
                        </Heading>
                        <Layout>
                            <Fill>
                                <CodePane
                                    lang="jsx"
                                    source={require("raw!../assets/jsx-es5.example")} />
                            </Fill>
                            <Fill>
                                <CodePane
                                    lang="jsx"
                                    source={require("raw!../assets/jsx-es6.example")} />
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide align="center center" id={_.uniqueId('slide_')}>
                        <Text textColor="white">
                            It's components all the way down.
                        </Text>
                    </Slide>
                    <Slide align="center center" notes='' id={_.uniqueId('slide_')}>
                        <Heading size={4} textColor="white">
                            Data Flow
                        </Heading>
                        <List margin="32px">
                            <ListItem textColor="white"><Code textColor="white">this.props</Code></ListItem>
                            <ListItem textColor="white">Event Handlers</ListItem>
                        </List>
                    </Slide>
                    <Slide align="center center" notes='' id={_.uniqueId('slide_')}>
                        <Heading size={4} textColor="white">
                            Component State
                        </Heading>
                        <List margin="32px">
                            <ListItem textColor="white"><Code textColor="white">this.state</Code></ListItem>
                            <ListItem textColor="white"><Code textColor="white">this.setState()</Code></ListItem>
                        </List>
                    </Slide>
                    <Slide align="center center" id={_.uniqueId('slide_')}>
                        <Heading size={4} textColor="white" margin="32px">
                            Performance
                        </Heading>
                        <Text textColor="white" margin="32px">
                            Browser DOM
                        </Text>
                        <Text textColor="white" margin="32px">
                            Optimizations?
                        </Text>
                    </Slide>
                    <Slide align="center center" notes='' id={_.uniqueId('slide_')}>
                        <Heading size={4} textColor="white">
                            Virtual DOM
                        </Heading>
                        <Text textColor="white" margin="32px">
                            Diffin' all over the world!
                        </Text>
                    </Slide>
                    <Slide align="center center" notes='' id={_.uniqueId('slide_')}>
                        <Heading size={4} textColor="white">
                            More Resources
                        </Heading>
                        <List margin="32px">
                            <ListItem textColor="white">
                                <Link href="">
                                    <Text textColor="white">Outline</Text>
                                </Link>
                            </ListItem>
                            <ListItem textColor="white">
                                <Link href="https://facebook.github.io/react/docs/tutorial.html">
                                    <Text textColor="white">React Tutorial</Text>
                                </Link>
                            </ListItem>
                            <ListItem textColor="white">
                                <Link href="https://github.com/kohei-takata/learnyoureact">
                                    <Text textColor="white">Thinking in React</Text>
                                </Link>
                            </ListItem>
                            <ListItem textColor="white">
                                <Link href="https://github.com/asbjornenge/thinking-in-react">
                                    <Text textColor="white">Learn You React</Text>
                                </Link>
                            </ListItem>
                            <ListItem textColor="white">
                                <Link href="https://facebook.github.io/flux/docs/overview.html#content">
                                    <Text textColor="white">Flux</Text>
                                </Link>
                            </ListItem>
                            <ListItem textColor="white">
                                <Link href="http://redux.js.org/">
                                    <Text textColor="white">Redux</Text>
                                </Link>
                            </ListItem>
                        </List>
                    </Slide>
                    <Slide align="center center" notes='' id={_.uniqueId('slide_')}>
                        <Heading size={4} textColor="white">
                            Thank you!
                        </Heading>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}

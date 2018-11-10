import * as React from 'react';
import { Grid, Thumbnail, Row, Col } from 'react-bootstrap';

import { PortfolioHeader } from './PortfolioHeader';

import * as style from '../../containers/App/style.css';

export class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <PortfolioHeader />
        <Grid>
          <Row>
            <Col
              className={style.portfolioCol}
              xs={12}
              md={4}
              data-aos="flip-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <Thumbnail
                className={style.port}
                src="../../assets/new.png"
                alt="242x200"
                href="https://backpack-tracker.herokuapp.com/"
                target="_blank"
              >
                <h3>
                  <b>BackPack Tracker - Track multiple bags with ease</b>
                </h3>
                <br />
                <p>
                  Keep track of your belongings today. A full stack application
                  with authentication, internal API and databases. Built using
                  mobile first design principles.
                </p>
              </Thumbnail>
            </Col>
            <Col
              className={style.portfolioCol}
              xs={12}
              md={4}
              data-aos="flip-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <Thumbnail
                className={style.port}
                src="../../assets/gyst.png"
                alt="242x200"
                href="http://gyst-dash.herokuapp.com/"
                target="_blank"
              >
                <h3>
                  <b>GYST - Custom Personal Dashboard</b>
                </h3>
                <br />
                <p>
                  Final Group Project EDA. Fullstack with many API's (including
                  Google and Spotify). Material UI, React Flex Grid, D3 Charts,
                  sockets live chat and more.
                </p>
              </Thumbnail>
            </Col>
            <Col
              className={style.portfolioCol}
              xs={12}
              md={4}
              data-aos="flip-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <Thumbnail
                className={style.port}
                src="../../assets/void2.png"
                alt="242x200"
                target="_blank"
                href="https://community.xero.com/business/discussion/262531"
              >
                <h3>
                  <b>Void invoices in bulk using the Xero API V1</b>
                </h3>
                <br />
                <p>
                  Inspired by a Xero Community feature request thread. Built
                  using express-handlebars early in my career, new version
                  released below.
                </p>
              </Thumbnail>
            </Col>
          </Row>
          {/* SECOND ROW */}
          <Row>
            <Col
              className={style.portfolioCol}
              xs={12}
              md={4}
              data-aos="flip-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <Thumbnail
                className={style.port}
                src="../../assets/duplicate.png"
                alt="242x200"
                href="https://v1invoicereducer.herokuapp.com/"
                target="_blank"
              >
                <h3>
                  <b>Xero Invoice Reducer V1</b>
                </h3>
                <br />
                <p>
                  Create summarised invoices with ease. This can help customers
                  who are over our recommended invoice limits, find their
                  duplicates and replace it with a singular invoice. Uses Xero
                  API and complex data structures.
                </p>
              </Thumbnail>
            </Col>
            <Col
              className={style.portfolioCol}
              xs={12}
              md={4}
              data-aos="flip-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <Thumbnail
                className={style.port}
                src="../../assets/cube.png"
                alt="242x200"
                href="https://cubetimer102.herokuapp.com/"
                target="_blank"
              >
                <h3>
                  <b>Rubik's Cube Timer</b>
                </h3>
                <br />
                <p>
                  Includes a database with graphs, historical times, sessions
                  and bests. Consumes external API's. Constructed with mobile
                  first deisgn.
                </p>
              </Thumbnail>
            </Col>
            <Col
              className={style.portfolioCol}
              xs={12}
              md={4}
              data-aos="flip-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <Thumbnail
                className={style.port}
                src="../../assets/motiv.png"
                alt="242x200"
                href="https://github.com/leslie-alldridge/slackbot-motivation"
                target="_blank"
              >
                <h3>
                  <b>Motivation Slack Bot</b>
                </h3>
                <br />
                <p>
                  Provides users access to motivational videos, images and
                  quotes. The ability to search by topic is also available.
                  Currently added to Xero's workspace and widely used by the
                  team. <br /> <br />
                  Enter <b>/motivateme</b> to get started!
                </p>
              </Thumbnail>
            </Col>
          </Row>
          {/* THIRD ROW */}
          <Row>
            <Col
              className={style.portfolioCol}
              xs={12}
              md={4}
              data-aos="flip-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <Thumbnail
                className={style.port}
                src="../../assets/v2void.png"
                alt="242x200"
                href="https://bulkvoidxero.herokuapp.com/"
                target="_blank"
              >
                <h3>
                  <b>Xero Bulk Void Tool V2</b>
                </h3>
                <br />
                <p>
                  I rebuilt my previous tool above as I felt it was outdated.
                  Express handlebars works, but doesn't have the flexibility
                  that React offers. Created with React, Material UI and API
                  calls to Xero.
                </p>
              </Thumbnail>
            </Col>
            <Col
              className={style.portfolioCol}
              xs={12}
              md={4}
              data-aos="flip-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <Thumbnail
                className={style.port}
                src="../../assets/circles.png"
                alt="242x200"
                href="https://leslie-alldridge.github.io/Fun-with-Circles/"
                target="_blank"
              >
                <h3>
                  <b>Fun With Circles</b>
                </h3>
                <br />
                <p>
                  A project I created early in my career. A simple HTML page
                  with Paper.js and a smooth 60 frames per second animation.
                  Endless fun popping bubbles.
                </p>
              </Thumbnail>
            </Col>
            <Col
              className={style.portfolioCol}
              xs={12}
              md={4}
              data-aos="flip-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <Thumbnail
                className={style.port}
                src="../../assets/summary2.png"
                alt="242x200"
                href="http://dailysummaryxero.herokuapp.com/"
                target="_blank"
              >
                <h3>
                  <b>Xero Invoice Reducer V2</b>
                </h3>
                <br />
                <p>
                  I've rebuilt my previous app above with React and Material UI.
                  This enables mobile users to navigate the web page and create
                  summarized invoices on the go with minimal effort.
                </p>
              </Thumbnail>
            </Col>
          </Row>
          {/* FOURTH ROW */}
          <Row>
            <Col
              className={style.portfolioCol}
              xs={12}
              md={4}
              data-aos="flip-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <Thumbnail
                className={style.port}
                src="../../assets/docker.png"
                alt="242x200"
                href="https://github.com/leslie-alldridge/mern-boilerplate"
                target="_blank"
              >
                <h3>
                  <b>Docker Deploys &amp; MERN Boilerplate</b>
                </h3>
                <br />
                <p>
                  I've learned how to use various Docker commands to create
                  images, host projects on Docker and deploy them to Heroku.{' '}
                  <a
                    href="https://github.com/leslie-alldridge/mern-boilerplate"
                    target="_blank"
                  >
                    Boilerplate
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://github.com/leslie-alldridge/docker-node-mongo"
                    target="_blank"
                  >
                    Task List
                  </a>
                  .
                </p>
              </Thumbnail>
            </Col>
            <Col
              className={style.portfolioCol}
              xs={12}
              md={4}
              data-aos="flip-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <Thumbnail
                className={style.port}
                src="../../assets/numbergame2.png"
                alt="242x200"
                href="https://github.com/leslie-alldridge/number-guesser"
                target="_blank"
              >
                <h3>
                  <b>Number Guessing Game</b>
                </h3>
                <br />
                <p>
                  I decided to dive into C# and challenge myself to learn
                  something new. I covered the basics and created a small
                  console game to test my skills. C# is definitely something on
                  my radar of languages to learn and it's starting to feel
                  natural.
                </p>
              </Thumbnail>
            </Col>
            <Col
              className={style.portfolioCol}
              xs={12}
              md={4}
              data-aos="flip-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <Thumbnail
                className={style.port}
                src="../../assets/loading.png"
                alt="242x200"
                href="https://github.com/leslie-alldridge"
                target="_blank"
              >
                <h3>
                  <b>More coming soon</b>
                </h3>
                <br />
                <p>
                  I'm learning something new every day! Stay up to date by
                  following me on GitHub or checking back here as my portfolio
                  will be updated regularly.
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

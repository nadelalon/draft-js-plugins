import React, { Component } from 'react';

// eslint-disable-next-line import/no-unresolved
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomImageEditor';
// eslint-disable-next-line import/no-unresolved
import customExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomImageEditor/editorStyles.css';
// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!../../../loaders/prism-loader?language=javascript!./webpackConfig';
// eslint-disable-next-line import/no-unresolved
import webpackImport from '!!../../../loaders/prism-loader?language=javascript!./webpackImport';

import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import CustomImageEditor from './CustomImageEditor';
import ExternalLink from '../../shared/Link';
import InlineCode from '../../shared/InlineCode';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={2}>{'Drag\'n\'Drop'}</Heading>
          <Heading level={3}>Supported Environment</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>
              Desktop: Yes
            </li>
            <li className={styles.listEntry}>
              Mobile: No
            </li>
            <li className={styles.listEntry}>
              Screen-reader: No
            </li>
          </ul>
        </Container>
        <AlternateContainer>
          <Heading level={2}>Getting Started</Heading>
          <Code code="npm install draft-js-plugins-editor" />
          <Code code="npm install draft-js-focus-plugin" />
          <Code code="npm install draft-js-drag-n-drop-plugin" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location in the installed package:
            &nbsp;
            <InlineCode code={'node_modules/draft-js-drag-n-drop-plugin/lib/plugin.css'} />
          </p>
          <Heading level={4}>Webpack Usage</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>
              1. Install Webpack loaders:
              &nbsp;
              <InlineCode code={'npm i style-loader css-loader --save-dev'} />
            </li>
            <li className={styles.listEntry}>
              2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.
              <Code code={webpackConfig} className={styles.guideCodeBlock} />
            </li>
            <li className={styles.listEntry}>
              3. Add the below import line to your component to tell Webpack to inject the style to your component.
              <Code code={webpackImport} className={styles.guideCodeBlock} />
            </li>
            <li className={styles.listEntry}>
              4. Restart Webpack.
            </li>
          </ul>
          <Heading level={4}>Browserify Usage</Heading>
          <p>
            Please help, by submiting a Pull Request to the <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Image/index.js">documentation</ExternalLink>.
          </p>
        </AlternateContainer>
        <Container>
          <Heading level={2}>Configuration Parameters</Heading>
        </Container>
        <Container>
          <Heading level={2}>Image + Drag&apos;n&apos;Drop</Heading>
          <CustomImageEditor />
          <Code code={customExampleCode} name="Editor.js" />
          <Code code={customExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}

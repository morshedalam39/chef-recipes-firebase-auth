import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  con: { padding: "30px", position: "relative" },
  qn: { fontSize: "30px", fontWeight: "500", display: "block" },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  section: { color: "white", textAlign: "center", margin: 30 },
});

const ReactPDF = () => {
  return (
    <Document>
      <Page style={styles.con}>
        <Text style={styles.qn}>
          1.Tell us the differences between uncontrolled and controlled
          components?
        </Text>
        <Text>
          Controlled: A Controlled Component is one that takes its current value
          through props and notifies changes through callbacks like onChange. A
          parent component "controls" it by handling the callback and managing
          its own state and passing the new values as props to the controlled
          component. You could also call this a "dumb component". Uncontrolled:
          A Uncontrolled Component is one that stores its own state internally,
          and you query the DOM using a ref to find its current value when you
          need it. This is a bit more like traditional HTML.
        </Text>
        <Text style={styles.qn}>
          2.How to validate React props using PropTypes?
        </Text>
        <Text>
          Import the PropTypes module from the prop-types package into your
          React component file: Define the PropTypes for your component by
          creating a static propTypes object within your component class or
          function component: Custom hooks can be used to encapsulate any
          reusable logic that involves state or side effects, such as fetching
          data from an API or managing a form's state. By creating custom hooks,
          you can abstract away the implementation details and create a clean,
          reusable API for your components to use. PropTypes are mainly used for
          development-time debugging and documenting your component's API. They
          are not enforced in production builds, so it's recommended to use
          other techniques like TypeScript or runtime type-checking libraries
          (e.g., TypeScript, Flow, or Joi) if you need more robust and
          runtime-enforced prop validation.
        </Text>
        <Text style={styles.qn}>
          3.Tell us the difference between nodejs and express js.?
        </Text>
        <Text>
          Node JS: An extension of JavaScript, NodeJS is an open-source
          server-side runtime environment built around the NodeJS language.
          Using a single-threaded approach for web loading and asynchronous
          programming, the framework has achieved great success in being
          highly-performant and scalable. In addition, you may also benefit from
          using it to improve the backend functionality of your project by
          implementing Node JS-based frameworks like Express, Socket.io, and
          Meteor. ExpressJS: ExpressJS is a framework for developing web
          applications with NodeJS. Among the two options, it is the most
          significant difference. The ExpressJS development services framework
          provides several exceptional features that make developing web apps
          easy and fast. By contrast, using the latter alone makes developing
          web apps more complex.
        </Text>
        <Text style={styles.qn}>
          4.What is a custom hook, and why will you create a custom hook?
        </Text>
        <Text>
          Custom React JS hooks offer reusability as when a custom hook is
          created, it can be reused easily, which makes the code cleaner and
          reduces the time to write the code. It also enhances the rendering
          speed of the code as a custom hook does not need to be rendered again
          and again while rendering the whole code.
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default ReactPDF;

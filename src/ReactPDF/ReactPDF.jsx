import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    con: {padding: '30px' , position: 'relative'},
    qn: { fontSize: '30px', fontWeight: '500', display: 'block' },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    section: { color: 'white', textAlign: 'center', margin: 30 }
});

const ReactPDF = () => {
  return (
    <Document>
      <Page style={styles.con}>
        <Text style={styles.qn}>
          1. differences between uncontrolled and controlled components.
        </Text>
        <Text>
          In React, controlled components refer to components that have their
          state and behavior controlled by the parent component. These
          components rely on props passed down from the parent component to
          update their state and behavior. Uncontrolled components refer to
          components that manage their own state internally.
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

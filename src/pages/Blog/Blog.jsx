import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import ReactPDF from "../../ReactPDF/ReactPDF";

const Blog = () => {
  return (
    <div>
      <PDFDownloadLink document={<ReactPDF></ReactPDF>} fileName="QNA">
       <div className="flex justify-center">
	   <button className="btn bg-slate-600 mt-4 mb-4 ">Download pdf</button>
	   </div>
      </PDFDownloadLink>

     <div>
	 <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">


		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl">1.Tell us the differences between uncontrolled and controlled components?</summary>
				<div className="px-4 pb-4">
					<p className=""><span className="font-bold">Controlled: </span> A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".</p> <br />
					<p><span className="font-bold">Uncontrolled: </span> A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl">2.How to validate React props using PropTypes?</summary>
				<div className="px-4 pb-4">
					<p>Import the PropTypes module from the prop-types package into your React component file:
Define the PropTypes for your component by creating a static propTypes object within your component class or function
component: Custom hooks can be used to encapsulate any reusable logic that involves state or side effects, such as fetching data from an API or managing a form's state. By creating custom hooks, you can abstract away the implementation details and create a clean, reusable API for your components to use.
PropTypes are mainly used for development-time debugging and documenting your component's API. They are not enforced in production builds, so it's recommended to use other techniques like TypeScript or runtime type-checking libraries (e.g., TypeScript, Flow, or Joi) if you need more robust and runtime-enforced prop validation. </p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl">2.Tell us the difference between nodejs and express js.?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p><span className="font-bold">Node JS:</span> An extension of JavaScript, NodeJS is an open-source server-side runtime environment built around the NodeJS language. Using a single-threaded approach for web loading and asynchronous programming, the framework has achieved great success in being highly-performant and scalable. <br />

In addition, you may also benefit from using it to improve the backend functionality of your project by implementing Node JS-based frameworks like Express, Socket.io, and Meteor.</p>
					<p><span className="font-bold">ExpressJS: </span>ExpressJS is a framework for developing web applications with NodeJS. Among the two options, it is the most significant difference. The ExpressJS development services framework provides several exceptional features that make developing web apps easy and fast. By contrast, using the latter alone makes developing web apps more complex.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl">2.What is a custom hook, and why will you create a custom hook??</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
				</div>
			</details>
		</div>
	</div>
</section>
	 </div>
    </div>
  );
};

export default Blog;

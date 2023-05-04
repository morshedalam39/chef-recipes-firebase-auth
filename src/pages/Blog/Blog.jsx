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
					<p className="mt-4"># A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".</p>
					<p># A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl">2.How to validate React props using PropTypes?</summary>
				<div className="px-4 pb-4">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl">2.Tell us the difference between nodejs and express js.?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
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

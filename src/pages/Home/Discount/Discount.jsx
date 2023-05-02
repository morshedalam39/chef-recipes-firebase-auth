import React from 'react';

const Discount = () => {
    return (
        <div className='mt-8'>


           <div className="p-6 py-12 bg-slate-300 rounded">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
				<br /><p>50% Off</p>
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg">MAMBA</span>
			</div>
			<button className="btn bg-slate-600">shop now</button>
		</div>
	</div>
</div> 



        </div>
    );
};

export default Discount;
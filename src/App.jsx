import { OrderProvider } from './components/context/OrderProvider';
import { HelloMsg } from './components/HelloMsg';
import { UsageCard } from './components/UsageCard';
import { AddOrderCard } from './components/AddOrderCard';

function App() {
	return (
		<OrderProvider>
			<div className="h-screen flex flex-col gap-[30px] justify-center items-center text-fg-primary bg-back-main">
				<HelloMsg />
				<div className="flex flex-col lg:flex-row gap-[30px]">
					<UsageCard />
					<AddOrderCard />
				</div>
			</div>
		</OrderProvider>
	);
}

export default App;

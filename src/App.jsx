import data from './data.js';
import Header from './components/Header';
import Card from './components/Card';

export default function App() {
    const info = data.map((item) => {
        return (<Card
                    key={item.id}
                    data={item}
                />)
    });
    return (
        <>
            <Header />
            <main>
                <section className='wrapper flow-content'>
                    {/* Still not completely clear how react pull the items out of the list */}
                    { info }
                </section>
            </main>
        </>
    )
}
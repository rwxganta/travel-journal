import Header from './components/Header';
import Card from './components/Card';

export default function App() {
    return (
        <>
            <Header />
            <main>
                <section className='wrapper flow-content'>
                    <Card />
                    <Card />
                </section>
            </main>
        </>
    )
}
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hobby } from './components/Hobby';
import { Skills } from './components/Skills';
import { Works } from './components/Works';
import { useAnimateItems } from './hooks/useAnimateItems';

function App() {
  useAnimateItems()
  return (
    <>
      <Header />
      <main className="content">
        <About/>
        <Skills />
        <Works/>
        <Hobby/>
      </main>
      <Footer/>
    </>
  )
}

export default App;
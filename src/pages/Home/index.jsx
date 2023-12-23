import Aside from '../../components/Aside/Aside'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import style from './Home.module.css'

export default function Home() {
    return (
        <div className={style.home}>
            <Header />
            <main>
                <h1 className='pageTitle'>Home</h1>

                <div className={style.cardContainer}>
                    <Card
                        key= {1}
                    />
                    
                    <Card
                        key= {2}
                    />
                    
                    <Card
                        key= {3}
                    />
                    <Card
                        key= {4}
                    />
                    <Card
                        key= {5}
                    />
                    <Card
                        key= {6}
                    />
                    <Card
                        key= {7}
                    />
                    <Card
                        key= {8}
                    />
                    <Card
                        key= {9}
                    />
                    <Card
                        key= {10}
                    />
                </div>
            </main>
            <Aside />
        </div>
    )
}

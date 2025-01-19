import { colors } from "@/utils/colors";
import { Button, Carousel, Icon, Text, View } from "@ant-design/react-native";
import { useState } from "react";
import { Image } from "react-native";
import './HeaderCarousel.css';

export function HeaderCarousel() {
    const [selected, setSelected] = useState(0)

    const playIcon = 'https://www.iconsdb.com/icons/preview/black/play-xxl.png'
    const defaultImage = 'https://imgs.search.brave.com/5EVDWdJlZDPDyOozV_do_gAyoRVE1UxKkoSSXVcqce0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDQv/aGFsby00LWNvdmVy/LmpwZw'
    return (
        <Carousel
            selectedIndex={selected}
            style={{ height: 300, width: '100%', marginTop: 10 }}
            autoplay
            infinite
            afterChange={e => setSelected(e)}
        >
            {
                Array(3)?.fill(null)?.map((_,i) => {
                    return <div key={i}
                        style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${defaultImage})`, height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <p className="carousel_title big">
                            Choose FUNZ for a
                            Next-level Gaming experience!
                        </p>
                        <div className="flex">
                            <Image
                                style={{ width: 30, height: 30, objectFit: 'cover' }}
                                source={require('../../../assets/images/coin1.png')} />
                            <p className="carousel_title">1,500,999</p>
                            </div>
                            <div className="flex">
                            <Image
                                style={{ width: 30, height: 30, objectFit: 'cover' }}
                                source={require('../../../assets/images/coin.png')} />
                            <p className="carousel_title">85.00</p>
                        </div>
                        <Button style={{ backgroundColor: colors.goldLight, marginTop:10 }}>
                            <span style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                                <Image
                                    style={{ width: 16, height: 16, objectFit: 'cover' }}
                                    source={require('../../../assets/images/play-icon.png')} />
                                <Text>Play Now!</Text>
                            </span>
                        </Button>
                    </div>
                })
            }
        </Carousel>
    )
}

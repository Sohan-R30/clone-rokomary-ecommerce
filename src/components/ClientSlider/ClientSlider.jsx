import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from "../../assets/client/Bagura-Cant-Public.png"
import img2 from "../../assets/client/CRP-LOGO.png"
import img3 from "../../assets/client/HI-Tech.png"
import img4 from "../../assets/client/onnorokom-group.png"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

const ClientSlider = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div className={`bg-[#f6f5f0] industrialSlider py-20 relative`}>
            <p className="text-3xl text-center pb-5">Our Clients Says</p>
            <button className="text-gray-400 text-4xl absolute top-2/4 left-20"><BsArrowLeftCircleFill/></button>
            <button className="text-gray-400 text-4xl absolute top-2/4 right-20"><BsArrowRightCircleFill/></button>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1 flex items-center gap-10 justify-center">
                    <img src={img1} alt="" />
                    <p className="max-w-2xl"> “Rokomari.com is amazing, took us only 8 hours to make desired book list integration that saves us 15-20 days of work” – Bogra Cantonment Public School and College </p>
                </div>
                <div className="keen-slider__slide number-slide2 flex items-center gap-10 justify-center">
                    <img src={img2} alt="" />
                    <p className="max-w-2xl"> “Rokomari.com is by far the best invoicing and billing application available. There corporate sales team would collapse in short order if not having their outstanding service and customized discount offer” – CRP </p>
                </div>
                <div className="keen-slider__slide number-slide3 flex items-center gap-10 justify-center">
                    <img src={img3} alt="" />
                    <p className="max-w-2xl"> “I’m continually looking out for awesome service experience. Rokomari.com still needs to upgrade its service but till now it are doing better than past” – BHTPA </p>
                </div>
                <div className="keen-slider__slide number-slide4 flex items-center gap-10 justify-center">
                    <img src={img4} alt="" />
                    <p className="max-w-2xl"> “Since we started collecting books from Rokomari.com, I feel like I’ve gotten a better service. Out of all the vendors we’ve had in last couple of years Rokomari.com is the most consistent”- OnnoRokom Group </p>
                </div>
              
            </div>
        </div>
    );
};

export default ClientSlider;
import {FaBug, FaCode, FaKeyboard, FaMugHot, FaSmile, FaSun, FaQuestion, FaGamepad, FaSwimmer, FaLaptop, FaPeopleCarry, FaHatCowboy, FaAlignCenter} from "react-icons/fa";
import {CiMonitor} from "react-icons/ci";
import { RiDrinks2Fill, RiEmojiStickerFill } from "react-icons/ri";
import { BsSoundwave, BsBucketFill } from "react-icons/bs";
import { GiShrug, GiTomato, GiDrinkMe, GiSoundWaves } from "react-icons/gi";
import { MdMonitor, MdOutlineSmartphone, MdGrass } from "react-icons/md";
import { PiTelevisionBold, PiHoodieBold } from "react-icons/pi";
import { IoLogoOctocat } from "react-icons/io";
import { FaGlassWater } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";

/**
 * Data for the questions and answers for each result
 */

export const quizData = [
    {
        questionNumber: "1 out of 8",
        questionText: "The weather is amazing and it's warm outside! How are you spending your day?",
        answers: {
            python: {
                icon: <RiDrinks2Fill size={50}/>,
                text: "Chilling at home with a cold drink."
            },
            javascript: {
                icon: <FaSun size={50}/>,
                text: "I'll be out. Gotta enjoy the weather when you can!"
            },
            html: {
                icon: <FaGamepad size={50}/>,
                text: "It's too warm for me. I'll be gaming."
            },
            css: {
                icon: <FaSwimmer size={50}/>,
                text: "Oh finally! I'm off to take a swim. Take care!"
            }
        }
    },
    {
        questionNumber: "2 out of 8",
        questionText: "What kind of keyboard is your favorite kind of keyboard?",
        answers: {
            javascript: {
                icon: <BsSoundwave size={50}/>,
                text: "Something clicky should do the trick."
            },
            html: {
                icon: <GiShrug size={50}/>,
                text: "As long as I can type on it, anything would work."
            },
            css: {
                icon: <FaLaptop size={50}/>,
                text: "My laptop's keyboard has been serving me well."
            },
            python: {
                icon: <FaKeyboard size={50}/>,
                text: "Do you see this keyboard? It's the fifth one I've assembled this month!"
            }
        }
    },
    {
        questionNumber: "3 out of 8",
        questionText: "How many monitors do you have in your ideal setup?",
        answers: {
            html: {
                icon: <FaLaptop size={50}/>,
                text: "To be honest I'm okay with my laptop's single screen."
            },
            javascript: {
                icon: <CiMonitor size={50}/>,
                text: "I need like three of those. How else am I going to multitask?"
            },
            python: {
                icon: <MdMonitor size={50}/>,
                text: "Two screens would be perfect for me. Coding on one, chilling on the other."
            },
            css: {
                icon: <MdOutlineSmartphone size={50}/>,
                text: "In a rough situation I could even work on my phone. But a screen could be nice."
            }
        }
    },
    {
        questionNumber: "4 out of 8",
        questionText: "What would define your programming style?",
        answers: {
            python: {
                icon: <PiTelevisionBold size={50}/>,
                text: "I watch something on the side and code at the same time. It's chill."
            },
            javascript: {
                icon: <FaPeopleCarry size={50}/>,
                text: "Teamwork is dream work! You can create anything with a good team!"
            },
            css: {
                icon: <GiTomato size={50}/>,
                text: "I have a coding buddy, he's called the Pomodoro Method."
            },
            html: {
                icon: <FaHatCowboy size={50}/>,
                text: "I'm a lonesome cowboy. I just need my computer and I'm good to go."
            }
        }
    },
    {
        questionNumber: "5 out of 8",
        questionText: "Codédex gives away plenty of cool merch! Which one is your favorite?",
        answers: {
            css: {
                icon: <BsBucketFill size={50}/>,
                text: "Bucket hats are great, especially in the summer!"
            },
            html: {
                icon: <RiEmojiStickerFill size={50}/>,
                text: "You can never have enough of stickers! I'll take them all!"
            },
            python: {
                icon: <PiHoodieBold size={50}/>,
                text: "I'm all about the hoodies! They're warm and comfy!"
            },
            javascript: {
                icon: <IoLogoOctocat size={50}/>,
                text: "The Octoplush! It's so cute and cuddly, I need one right now."
            }
        }
    },
    {
        questionNumber: "6 out of 8",
        questionText: "What would be your drink of choice?",
        answers: {
            python: {
                icon: <FaGlassWater size={50}/>,
                text: "The bare bones. Give me some water and I'll be happy."
            },
            javascript: {
                icon: <GiDrinkMe size={50}/>,
                text: "Energy drinks! I need to keep my energy up!"
            },
            html: {
                icon: <FaMugHot size={50}/>,
                text: "Coffee. I need to stay awake and focused."
            },
            css: {
                icon: <RiDrinks2Fill size={50}/>,
                text: "I need my soda at all times. How else should I stay cool?"
            }
        }
    },
    {
        questionNumber: "7 out of 8",
        questionText: "Oh no, there's a problem with your code! How are you approaching this problem?",
        answers: {
            javascript: {
                icon: <SiTypescript size={50}/>,
                text: "I've already implemented TypeScript. It should be easy."
            },
            html: {
                icon: <FaCode size={50}/>,
                text: "I think I forgot closing a bracket or something..."
            },
            css: {
                icon: <FaAlignCenter size={50}/>,
                text: "I'll keep trying. Someone has to center the div no matter what."
            },
            python: {
                icon: <FaBug size={50}/>,
                text: "I'll just rewrite the whole thing. It's easier that way."
            }
        }
    },
    {
        questionNumber: "8 out of 8",
        questionText: "Are you vibing with the quiz?",
        answers: {
            html: {
                icon: <GiSoundWaves size={50}/>,
                text: "Oh you bet! The vibes are out of this world!"
            },
            css: {
                icon: <MdGrass size={50}/>,
                text: "I wish I was laying on the grass right now..."
            },
            javascript: {
                icon: <FaSmile size={50}/>,
                text: "It's well made! I'm more of a hands-on person."
            },
            python: {
                icon: <FaQuestion size={50}/>,
                text: "I'm just here for the results. Let's get this over with."
            }
        }
    },
];
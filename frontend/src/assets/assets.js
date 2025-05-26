import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}


export const specialityData = [
    {
        speciality: 'Médecin généraliste',
        image: General_physician
    },
    {
        speciality: 'Gynécologue',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologue',
        image: Dermatologist
    },
    {
        speciality: 'Pédiatre',
        image: Pediatricians
    },
    {
        speciality: 'Neurologue',
        image: Neurologist
    },
    {
        speciality: 'Gastro-entérologue',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'Médecin généraliste',
        degree: 'MBBS',
        experience: '4 ans',
        about: "Dr. Richard James sengage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. Richard James partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.",
        fees: 2500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynécologue',
        degree: 'MBBS',
        experience: '3 ans',
        about: "Dr. Emily Larson s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. Emily Larson partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés. ",
        fees: 2500,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. David Patel',
        image: doc3,
        speciality: 'Dermatologue',
        degree: 'MBBS',
        experience: '1 an',
        about: "Dr. David Patel s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. David Patel partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.",
        fees: 2500,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pédiatre',
        degree: 'MBBS',
        experience: '2 ans',
        about: "Dr. Christopher Lee s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. Christopher Lee partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.",
        fees: 2500,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologue',
        degree: 'MBBS',
        experience: '4 ans',
        about: "Dr. Jennifer Garcia s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. Jennifer Garcia partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.",
        fees: 2500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologue',
        degree: 'MBBS',
        experience: '4 ans',
        about: "Dr. Andrew Williams s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. Andrew Williams partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.",
        fees: 2500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Dav',
        image: doc7,
        speciality: 'Gastro-entérologue',
        degree: 'MBBS',
        experience: '4 ans',
        about: "Dr. Christopher Davis s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. Christopher Davis partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.",
        fees: 2500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynécologue',
        degree: 'MBBS',
        experience: '3 ans',
        about: "Dr. Timothy White s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. Timothy White partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.",
        fees: 2500,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologue',
        degree: 'MBBS',
        experience: '1 an',
        about: "Dr. Ava Mitchell s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. Ava Mitchell partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.",
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pédiatre',
        degree: 'MBBS',
        experience: '2 ans',
        about: "Dr. Jeffrey King s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. Jeffrey King partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.",
        fees: 2500,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologue',
        degree: 'MBBS',
        experience: '4 ans',
        about: "Dr. Zoe Kelly s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. Zoe Kelly partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.",
        fees: 2500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologue',
        degree: 'MBBS',
        experience: '4 ans',
        about: "Dr. Patrick Harris s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. Patrick Harris partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.",
        fees: 2500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'Médecin généraliste',
        degree: 'MBBS',
        experience: '4 ans',
        about: "Dr. Chloe Evans s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. Chloe Evans partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.",
        fees: 2500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynécologue',
        degree: 'MBBS',
        experience: '3 ans',
        about: "Dr. Ryan Martinez s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces. Dr. Ryan Martinez partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.",
        fees: 2500,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologue',
        degree: 'MBBS',
        experience: '1 an',
        about: "Dr. Amelia s'engage pleinement à offrir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.. Dr. Amelia Hill partage cet engagement en fournissant des soins médicaux globaux centrés sur la prévention, la détection précoce et des traitements adaptés.  ",
        fees: 2500,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]
import React from "react";
import HeroSection from '../components/HeroSection/HeroSection';
import WhiteBanner from '../components/WhiteBanner/WhiteBanner';
import YellowSection from "../components/YellowSection/YellowSection";
import DogSection from "../components/DogSection/DogSection";
import RedSection from "../components/RedSection/RedSection";
import LastSection from "../components/LastSection/LastSection";
export default function APP(){
    return (
        <div className="pedigree-page">
            <HeroSection></HeroSection>
            <WhiteBanner></WhiteBanner>
            <YellowSection></YellowSection>
            <DogSection></DogSection>
            <RedSection></RedSection>
            <LastSection></LastSection>
        </div>
    );
} 
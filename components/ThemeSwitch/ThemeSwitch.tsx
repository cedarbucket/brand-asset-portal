"use client";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SunSVG from "@/public/assets/images/svgs/sun.svg";
import MoonSVG from "@/public/assets/images/svgs/moon.svg";
import Image from "next/image";
import { ThemeState } from "@/context/ThemeState";

const SwitchWrapper = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #87ceeb;
  transition: 0.4s;
  border-radius: 30px;

  &::before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    border-radius: 20px;
    left: 2px;
    bottom: 2px;
    z-index: 2;
    background-color: #e8e8e8;
    transition: 0.4s;
  }

  ${HiddenCheckbox}:checked + & {
    background-color: #000000;
  }

  ${HiddenCheckbox}:checked + &::before {
    transform: translateX(30px);
  }
`;

const Sun = styled.span`
  position: absolute;
  top: 6px;
  left: 36px;
  z-index: 1;
  width: 24px;
  height: 24px;

  svg {
    fill: #ffd43b;
    animation: rotate 15s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Moon = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1;
  width: 24px;
  height: 24px;

  svg {
    fill: #73c0fc;
    animation: tilt 5s linear infinite;
  }

  @keyframes tilt {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeState);
  const [isChecked, setIsChecked] = useState(theme === "dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("themeMode");
    if (storedTheme) {
      setIsChecked(storedTheme === "dark");
    }
  }, []);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (isChecked) {
      setTheme("dark");
      localStorage.setItem("themeMode", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("themeMode", "light");
    }
  }, [isChecked, setTheme]);

  return (
    <SwitchWrapper>
      <Sun>
        <Image src={SunSVG} alt={""} />
      </Sun>
      <Moon>
        <Image src={MoonSVG} alt={""} width={18} />
      </Moon>
      <HiddenCheckbox checked={isChecked} onChange={handleChange} />
      <Slider />
    </SwitchWrapper>
  );
};

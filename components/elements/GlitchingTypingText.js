import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/modules/GlitchingTypingText.module.scss";

const GlitchingTypingText = (props) => {
    const {
        children,
        element: Component = "p",
        style,
        className,
        typingPermitted = true,
        flagDoneTyping,
        displayCaret = true,
        caretWidth = 10,
        caretColor = "currentColor",
        blinkingCaret = false,
        caretBlinkingSpeed = 1000,
        nextCharProbability = 0.8,
        typingDuration = 3000,
        glitchProbability = 0.25,
        potentialGlitchInterval = 250,
    } = props;
    const text = children;
    const [renderedText, setRenderedText] = useState(text || "");
    const [sliceIndex, setSliceIndex] = useState(0);
    const [glitchingIntervalID, setGlitchingIntervalID] = useState(null);
    const [typingIntervalID, setTypingIntervalID] = useState(null);

    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const randomizeTextCharacter = (textToAugment) => {
        const charToReplaceIndex = Math.floor(Math.random() * textToAugment.length);
        const randomChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        const splitText = textToAugment.split("");
        splitText[charToReplaceIndex] = randomChar;
        const newText = splitText.join("");
        return newText;
    };

    useEffect(() => {
        return () => {
            clearInterval(glitchingIntervalID);
            clearInterval(typingIntervalID);
        };
    }, []);

    const typingInterval = Math.floor(typingDuration / (text?.length || 1));
    useEffect(() => {
        let gID, tID;
        if (typingPermitted) {
            gID = setInterval(() => {
                if (Math.random() > 1 - glitchProbability) {
                    setRenderedText(randomizeTextCharacter(text));
                } else {
                    setRenderedText(text);
                }
            }, potentialGlitchInterval);
            setGlitchingIntervalID(gID);

            if (typingDuration !== -1) {
                if (sliceIndex < text.length) {
                    tID = setInterval(() => {
                        if (Math.random() > 1 - nextCharProbability) {
                            setSliceIndex((index) => index + 1);
                        }
                    }, typingInterval);
                    setTypingIntervalID(tID);
                }
            } else {
                setSliceIndex(text.length);
            }
        } else {
            clearInterval(gID);
            clearInterval(tID);
        }
    }, [typingPermitted]);

    useEffect(() => {
        if (sliceIndex >= text.length) {
            flagDoneTyping?.();
            clearInterval(typingIntervalID);
        }
    }, [sliceIndex]);

    return (
        <Component
            className={`${styles.renderedText} ${displayCaret && styles.caret} ${
                blinkingCaret && styles.blinkingCaret
            }  ${className ? className : ""}`}
            style={{
                "--caret-width": `${caretWidth}px`,
                "--caret-color": caretColor,
                "--caret-blinking-speed": `${caretBlinkingSpeed}ms`,
                ...style,
            }}
        >
            {renderedText.slice(0, sliceIndex)}
        </Component>
    );
};

export default GlitchingTypingText;

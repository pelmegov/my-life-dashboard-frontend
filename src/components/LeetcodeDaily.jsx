import React, {useEffect, useState} from 'react';
import {Button} from "./index";
import {useStateContext} from "../contexts/ContextProvider";

const LEETCODE_LINK = 'https://leetcode.com';
const LEETCODE_API_ENDPOINT = `https://cors-anywhere.herokuapp.com/${LEETCODE_LINK}/graphql`
const DAILY_CODING_CHALLENGE_QUERY = `
        query questionOfToday {
            activeDailyCodingChallengeQuestion {
                date
                userStatus
                link
                question {
                    acRate
                    difficulty
                    freqBar
                    frontendQuestionId: questionFrontendId
                    isFavor
                    paidOnly: isPaidOnly
                    status
                    title
                    titleSlug
                    hasVideoSolution
                    hasSolution
                    topicTags {
                        name
                        id
                        slug
                    }
                }
            }
        }`

function LeetcodeDaily(props) {

    const {currentColor} = useStateContext();
    const [link, setLink] = useState(LEETCODE_LINK);
    const [difficulty, setDifficulty] = useState('Unknown');
    const [title, setTitle] = useState('Title');

    useEffect(() => {
        console.log(`Fetching daily coding challenge from LeetCode API.`);

        const init = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query: DAILY_CODING_CHALLENGE_QUERY}),
        }

        fetch(LEETCODE_API_ENDPOINT, init)
            .then((res) => {
                return res.json();
            })
            .then(r => r.data.activeDailyCodingChallengeQuestion)
            .then((data) => {
                setLink(LEETCODE_LINK + data.link);
                setDifficulty(data.question.difficulty);
                setTitle(data.question.title);
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    }, []);

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    return (
        <div className="bg-gray-900 dark:text-gray-200 dark:bg-secondary-dark-bg h-44
                rounded-xl w-full lg:w-80 p-8 pt-6 m-3
                bg-leetcode bg-contain bg-no-repeat bg-right">
            <p className="font-bold text-gray-300">Daily Challenge</p>
            <p className="text-gray-200">{title}</p>
            <p className="text-gray-200">{difficulty}</p>
            <div className="mt-4">
                <Button
                    color="white"
                    bgColor={currentColor}
                    text="Open In Leetcode"
                    borderRadius="10px"
                    size="sm"
                    onClick={() => {
                        openInNewTab(link)
                    }}
                />
            </div>
        </div>
    );
}

export default LeetcodeDaily;



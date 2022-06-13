import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DropDownContainer = styled.div`
  width: 20rem;
  margin: 0 auto;
  margin-bottom: 7rem;
  padding: 0;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;
const DropDownListContainer = styled.div`
  position: relative;
`;
const DropDownHeader = styled.div`
  margin-bottom: 0.1rem;
  padding: 0.5em;
  font-size: 1.5rem;
  text-align: left;
  color: #ddd;
  background: #282c34;
  border: 1px solid #ddd;
  border-radius: 0.4rem;
  cursor: pointer;
  & span {
    text-align: right;
    float: right;
  }
  &:after {
    content: "";
    clear: both;
  }
`;
const DropDownList = styled.ul`
  position: absolute;
  padding: 0;
  margin: 0;
  width: 99%;
  color: #ddd;
  background: #282c34;
  border: 1px solid #ddd;
  border-radius: 0.4rem;
  &:first-child {
    padding-top: 0.8em;
  }
`;
const DropDownListItem = styled.li`
  list-style: none;
  padding: 0.5em;
  text-align: left;
  font-size: 1.5rem;
  cursor: pointer;
  &:first-child {
    border-bottom: 1px solid #ddd;
  }
`;

const dropDownOptions = [
  { id: 1, title: "English", value: "en" },
  { id: 2, title: "Türkçe", value: "tr" },
];

const LanguageSelector = ({ onChangeLanguage, defaultLanguageValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const DropDownToggleHandler = () =>
    setIsOpen((prev) => {
      return !prev;
    });

  const [selectedOptionTitle, setSelectedOptionTitle] = useState(null);

  const selectedClickHandler = (option) => {
    console.log(option);
    setSelectedOptionTitle(option["title"]);
    onChangeLanguage(option["value"]);
    setIsOpen(false);
    console.log(option.value);
  };

    useEffect(() => {
        if (defaultLanguageValue) {
            const selectedOption = dropDownOptions.find(
            (option) => option.value === defaultLanguageValue
            );
            setSelectedOptionTitle(selectedOption.title);
        }
    },[defaultLanguageValue]);

  return (
    <DropDownContainer>
      <DropDownListContainer>
        <DropDownHeader onClick={DropDownToggleHandler}>
          {selectedOptionTitle || "Select Language"} <span>&gt;</span>
        </DropDownHeader>
        {isOpen && (
          <DropDownList>
            {dropDownOptions.map((option) => {
              return (
                <DropDownListItem
                  key={option.id}
                  onClick={() => {
                    selectedClickHandler(option);
                  }}
                >
                  {option.title}
                </DropDownListItem>
              );
            })}
          </DropDownList>
        )}
      </DropDownListContainer>
    </DropDownContainer>
  );
};

LanguageSelector.propTypes = {
  onChangeLanguage: PropTypes.func.isRequired,
};

export default LanguageSelector;

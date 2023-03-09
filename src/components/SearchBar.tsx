/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from './Button';
import TextInput from './TextInput';

interface SearchBarProps {
  searchText: string;
  buttonText: string;
  placeholder: string;
  onSearchTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

const searchBarMediaQuery = `
  @media only screen and (min-width: 600px) {
    margin-bottom: 2%;
  }
`;

const searchBarCss = css({
  paddingTop: '20px',
  marginBottom: '5%',
  searchBarMediaQuery,
});

const searchButtonCss = css({
  marginLeft: '10px',
  marginTop: '4px',
});

const SearchBar = (props: SearchBarProps) => {
  const {
    className,
    searchText,
    placeholder,
    onSearchTextChange,
    buttonText,
    onButtonClick,
  } = props;

  return (
    <div css={searchBarCss} className={className}>
      <TextInput placeholder={placeholder} value={searchText} onChange={onSearchTextChange} />

      <Button
        text={buttonText}
        css={searchButtonCss}
        disabled={!searchText}
        onClick={onButtonClick}
      />
    </div>
  );
};

SearchBar.defaultProps = {
  className: '',
};

export default SearchBar;

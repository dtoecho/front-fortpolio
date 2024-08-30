import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 1200px;
    margin: 100px;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 34px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const WriterWrapper = styled.div`
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const InputWrapper = styled.div`
    padding-top: 40px;
`;

export const Label = styled.div`
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
`;

export const Writer = styled.input`
    width: 486px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
    width: 486px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Subject = styled.input`
    width: 996px;
    height: 52px;
    border: 1px solid #bdbdbd;
    padding-left: 16px;
`;

export const Contents = styled.textarea`
    width: 996px;
    height: 480px;
    padding: 14px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const ZipCodeWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ZipCode = styled.input`
    width: 77px;
    height: 52px;
    border: 1px solid #bdbdbd;
    padding-left: 16px;

    &::placeholder {
        color: #bdbdbd;
    }
`;

export const SearchBtn = styled.button`
    width: 124px;
    height: 52px;
    margin-left: 16px;
    background-color: black;
    color: #ffffff;
    cursor: pointer;
`;

export const Address = styled.input`
    width: 996px;
    height: 52px;
    margin-top: 16px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const YouTube = styled.input`
    width: 996px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const ImgWrapper = styled.div`
    width: 996px;
    padding-top: 40px;
`;

export const UploadButton = styled.button`
    width: 78px;
    height: 78px;
    background-color: #bdbdbd;
    margin-right: 24px;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const OptionWrapper = styled.div`
    width: 996px;
    padding-top: 40px;
`;

export const RadioButton = styled.input`
    cursor: pointer;
`;

export const RadioLabel = styled.label`
    margin-left: 8px;
    margin-right: 20px;
    font-weight: 500;
    cursor: pointer;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
`;

export const CancelButton = styled.button`
    width: 179px;
    height: 52px;
    background-color: #bdbdbd;
    border: none;
    font-size: 16px;
    font-weight: 500;
    margin-left: 12px;
    margin-right: 12px;
    cursor: pointer;
`;

export const SubmitButton = styled.button`
    width: 179px;
    height: 52px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    /* margin-left: 12px; */
    /* margin-right: 12px; */
    cursor: pointer;

    background-color: yellow;
`;

export const Error = styled.div`
    color: red;
    font-size: 14px;
`;

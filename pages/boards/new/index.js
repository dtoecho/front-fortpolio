import {
    Wrapper,
    Title,
    InputWrapper,
    Label,
    Writer,
    WriterWrapper,
    Password,
    Subject,
    Contents,
    ZipCodeWrapper,
    ZipCode,
    SearchBtn,
    Address,
    YouTube,
    ImgWrapper,
    UploadButton,
    OptionWrapper,
    RadioButton,
    RadioLabel,
    ButtonWrapper,
    CancelButton,
    SubmitButton,
    Error,
} from "../../../styles/boardsNew";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

// - - - - - - - gql - - - - - - -

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`;

// - - - - - - -gql - - - - - - - -

export default function BoardNewPage() {
    const [writer, setWriter] = useState("");
    const [passwrod, setPassword] = useState("");
    const [subject, setSubject] = useState("");
    const [contents, setContents] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const [youtube, setYoutube] = useState("");
    const [createBoard] = useMutation(CREATE_BOARD);
    const router = useRouter();

    function onChangeWriter(e) {
        setWriter(e.target.value);
    }
    function onChangePassword(e) {
        setPassword(Number(e.target.value));
    }
    function onChangeSubject(e) {
        setSubject(e.target.value);
    }
    function onChangeContents(e) {
        setContents(e.target.value);
    }
    // function handleChangeZipcode(e) {
    //     setWriter(e.target.value);
    // }
    // function handleChangeAddress(e) {
    //     setWriter(e.target.value);
    // }
    // function handleChangeYoutube(e) {
    //     setWriter(e.target.value);
    // }

    async function onClickSubmit() {
        if (
            writer === "" &&
            passwrod === "" &&
            subject === "" &&
            contents === ""
        ) {
            alert("입력한 정보가 올바르지 않습니다.");
        } else {
            const result = await createBoard({
                variables: {
                    writer,
                    title: subject,
                    contents,
                },
            });
            alert("등록에 성공하였습니다.");
            router.push(`/boards/${result.data.createBoard.number}`);
        }
    }
    return (
        <div>
            <Wrapper>
                <Title>게시물 등록</Title>
                <WriterWrapper>
                    <InputWrapper>
                        <Label>작성자</Label>
                        <Writer
                            onChange={onChangeWriter}
                            placeholder="이름을 적어주세요."
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>비밀번호</Label>
                        <Password
                            onChange={onChangePassword}
                            placeholder="비밀번호를 입력해주세요"
                        />
                    </InputWrapper>
                </WriterWrapper>
                <InputWrapper>
                    <Label>제목</Label>
                    <Subject
                        onChange={onChangeSubject}
                        placeholder="제목을 작성해주세요."
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>내용</Label>
                    <Contents
                        onChange={onChangeContents}
                        type="textarea"
                        placeholder="내용을 작성해주세요."
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>주소</Label>
                    <ZipCodeWrapper>
                        <ZipCode placeholder="07250" />
                        <SearchBtn>우편번호 검색</SearchBtn>
                    </ZipCodeWrapper>
                    <Address></Address>
                    <Address></Address>
                </InputWrapper>
                <InputWrapper>
                    <Label>유튜브</Label>
                    <YouTube placeholder="링크를 복사해주세요" />
                </InputWrapper>
                <ImgWrapper>
                    <Label>사진 첨부</Label>
                    <UploadButton>+</UploadButton>
                    <UploadButton>+</UploadButton>
                    <UploadButton>+</UploadButton>
                </ImgWrapper>
                <OptionWrapper>
                    <Label>메인설정</Label>
                    <RadioButton
                        type="radio"
                        id="youtube"
                        name="radio-button"
                    />
                    <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                    <RadioButton type="radio" id="image" name="radio-button" />
                    <RadioLabel htmlFor="image">사진</RadioLabel>
                </OptionWrapper>
                <ButtonWrapper>
                    <SubmitButton onClick={onClickSubmit}>
                        등록하기
                    </SubmitButton>
                </ButtonWrapper>
            </Wrapper>
        </div>
    );
}

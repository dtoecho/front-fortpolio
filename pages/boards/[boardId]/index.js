import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
    Wrapper,
    Header,
    UserImgWrapper,
    UserImg,
    WriterWrapper,
    AuthorInfoWrapper,
    Writer,
    WrittenDate,
    ActionWrapper,
    LinkBtn,
    LocationBtn,
    Title,
    Contents,
    LikesWrapper,
    Likes,
    DisLikes,
    ListWrapper,
    List,
    Modify,
    Delete,
    Hr,
    CommentWrapper,
} from "../../../styles/boardDetail";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number: $number) {
            number
            writer
            title
            contents
            createdAt
        }
    }
`;

export default function BoardDetailPage() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.boardId),
        },
    });

    return (
        <div>
            <Wrapper>
                <Header>
                    <WriterWrapper>
                        <UserImgWrapper>
                            <UserImg src="../../../Vector.png" />
                        </UserImgWrapper>
                        <AuthorInfoWrapper>
                            <Writer>{data?.fetchBoard?.writer}</Writer>
                            <WrittenDate>
                                Date: {data?.fetchBoard?.createdAt}
                            </WrittenDate>
                        </AuthorInfoWrapper>
                    </WriterWrapper>
                    <ActionWrapper>
                        <LinkBtn />
                        <LocationBtn />
                    </ActionWrapper>
                </Header>
                <Title>{data?.fetchBoard?.title}</Title>
                <Contents>{data?.fetchBoard?.contents}</Contents>
                <LikesWrapper>
                    <Likes />
                    <DisLikes />
                </LikesWrapper>
            </Wrapper>
            <ListWrapper>
                <List>목록으로</List>
                <Modify>수정하기</Modify>
                <Delete>삭제하기</Delete>
            </ListWrapper>
        </div>
    );
}

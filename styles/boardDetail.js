import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 55px;
    margin-inline: 360px;
    padding: 0px 102px;
    box-shadow: 0px 0px 10px #bdbdbd;
`;

export const Header = styled.header`
    width: 996px;
    border-bottom: 1px solid #bdbdbd;
    display: flex;
    flex-direction: row;
    padding: 20px 0px;
    justify-content: space-between;
`;

export const WriterWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const UserImgWrapper = styled.div`
    width: 56px;
    height: 56px;
`;

export const UserImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const AuthorInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 12px;
`;

export const Writer = styled.div`
    font-weight: 500;
    font-size: 24px;
`;

export const WrittenDate = styled.div`
    color: rgba(130, 130, 130, 1);
`;

export const ActionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LinkBtn = styled.button`
    width: 32px;
    height: 32px;
    background: url("../../../ic_link-32px.png");
    border: none;
`;
export const LocationBtn = styled.button`
    width: 32px;
    height: 32px;
    background: url("../../../ic_location_on-32px.png");
    border: none;
    margin-left: 20px;
`;

export const Title = styled.div`
    height: 54px;
    width: 996px;
    font-size: 36px;
    margin-top: 80px;
`;

export const Contents = styled.div`
    width: 996px;
    height: 616px;
`;

export const LikesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Likes = styled.button`
    width: 40px;
    height: 51px;
    background: url("../../../thumb_up.png");
    border: none;
`;

export const DisLikes = styled.button`
    width: 40px;
    height: 51px;
    background: url("../../../thumb_down.png");
    border: none;
    margin-left: 40px;
`;

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const List = styled.button`
    width: 179px;
    height: 45px;
    border: 1px solid #bdbdbd;
    background: white;
`;

export const Modify = styled.button`
    width: 179px;
    height: 45px;
    border: 1px solid #bdbdbd;
    background: white;
`;

export const Delete = styled.button`
    width: 179px;
    height: 45px;
    border: 1px solid #bdbdbd;
    background: white;
`;

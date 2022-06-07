import styled from 'styled-components';

export const container = style.div`
    margin: 30px 0;
    cursos: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

export const info = styled.div`
    flex: 1;
    margin-right: 20px;

`;

export const title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #fff
`;

export const description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #b8b8d4;
`;

export const iconArea = styled.div<{ active: boolean; }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props = > props.active ? '#494a7c' : '#e94a7c';
    justify-content: center;
    display: flex;
    align-items: center;
´;

export const point = styled.div<{ active: boolean; }>`
    width: 6px;
    height: 6px;
    border: 3px solid #494a7c;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active ? '#02024a' : '#02024a';
`;
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    margin: 0;padding: 0;
    @import url(//db.onlinewebfonts.com/c/bd6d57e762c3ae26bb99d09cce5bc33f?family=Patagonia);
    font-family: "Patagonia";
`

export const TableContainer = styled.table`
    margin: 5vh 10px 0 18vw;
    height: fit-content;
    border-collapse: collapse;
    width: 30%;

    th,
    td {
        @import url(//db.onlinewebfonts.com/c/3bd84147fc91089c2d9a15e632291f25?family=News+Gothic);
        font-family: "News Gothic";
        border: 1px solid #c2c2c2;
        text-align: left;
        padding: 8px;
        font-size: 32px;
    }

    th {
        font-size: 1.5em;
        color: #5a5e60;
    }

    td {
        font-size: 1.25em;
        color: #7a7a7a;
    }
`

export const Chart = styled.div`
    display: flex;
    width: 25vw;
    margin-left: 10vw;

`
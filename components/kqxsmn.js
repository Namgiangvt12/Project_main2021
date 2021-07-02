
import React from "react"
import Container from 'react-bootstrap/Container'
var number = 1;
const kqxsmn = ({xsmn}) => {
    return(
            <Container>
            <div >
                <table className= "table table-bordered text-center">
                    <tbody>
                        <tr>
                            <th> Giải </th>
                            {xsmn.map(kqxsmn => ( <th key={"number" + (number = number+1).toString()}  ><a href={"/"+ kqxsmn.url} title={kqxsmn.provinceName}>{kqxsmn.provinceName}</a></th>))} 

                        </tr>
                        <tr>
                            <td>G8</td>
                            {xsmn.map(kqxsmn => ( <td className="last" key={"number" + (number = number+1).toString()}><div key = {kqxsmn.lotData}>{kqxsmn.lotData['8'][0]}</div></td>))} 
                        </tr>
                        <tr>
                            <td>G7</td>
                            {xsmn.map(kqxsmn => ( <td key={"number" + (number = number+1).toString()}><div >{kqxsmn.lotData['7'][0]}</div></td>))} 
                        </tr>
                        <tr>
                            <td>G6</td>
                            {xsmn.map(kqxsmn => ( 
                                    <td key={"number" + (number = number+1).toString()}>
                                        <div>{kqxsmn.lotData['6'][0]}</div>
                                        <div>{kqxsmn.lotData['6'][1]}</div>
                                        <div>{kqxsmn.lotData['6'][2]}</div>
                                    </td>

                            ))} 
                        </tr>
                        <tr>
                            <td>G5</td>
                            {xsmn.map(kqxsmn => ( <td key={"number" + (number = number+1).toString()}><div>{kqxsmn.lotData['5'][0]}</div></td>))} 
                        </tr>
                        <tr>
                            <td>G4</td>
                            {xsmn.map(kqxsmn => ( 
                                    <td key={"number" + (number = number+1).toString()}>
                                        <div>{kqxsmn.lotData['4'][0]}</div>
                                        <div>{kqxsmn.lotData['4'][1]}</div>
                                        <div>{kqxsmn.lotData['4'][2]}</div>
                                        <div>{kqxsmn.lotData['4'][3]}</div>
                                        <div>{kqxsmn.lotData['4'][4]}</div>
                                        <div>{kqxsmn.lotData['4'][5]}</div>
                                        <div>{kqxsmn.lotData['4'][6]}</div>
                                    </td>

                            ))} 
                        </tr>
                        <tr>
                            <td>G3</td>
                            {xsmn.map(kqxsmn => ( 
                                    <td key={"number" + (number = number+1).toString()}>
                                        <div>{kqxsmn.lotData['3'][0]}</div>
                                        <div>{kqxsmn.lotData['3'][1]}</div>
                                    </td>

                            ))} 
                        </tr>
                        <tr>
                            <td>G2</td>
                            {xsmn.map(kqxsmn => ( <td key={"number" + (number = number+1).toString()}><div>{kqxsmn.lotData['2'][0]}</div></td>))} 
                        </tr>
                        <tr>
                            <td>G1</td>
                            {xsmn.map(kqxsmn => ( <td key={"number" + (number = number+1).toString()}><div>{kqxsmn.lotData['1'][0]}</div></td>))} 
                        </tr>
                        <tr>
                            <td>ĐB</td>
                            {xsmn.map(kqxsmn => ( <td key={"number" + (number = number+1).toString()}><div className="last">{kqxsmn.lotData['DB'][0]}</div></td>))} 
                        </tr>
                        
                    </tbody>
                </table>

                
            </div>
            </Container>
    )
};

export default kqxsmn;

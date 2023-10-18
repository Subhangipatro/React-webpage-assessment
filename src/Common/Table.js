import React from 'react';
import './Table.css'; // Import custom CSS file
import { BsSearch } from 'react-icons/bs';
const Table = () => {
    return (
        <div className="table-responsive">
            <div className="table-desc">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(250 251 255)", padding: "8px 8px", borderRadius: "5px" }}>
                      <BsSearch color='a4a8af' />
                      <input style={{ backgroundColor: "rgb(250 251 255)" }} placeholder='Search'></input>
                    </div>
                    <select name="cars" id="cars">
                      <option value="volvo">Last 30days</option>
                      <option value="saab">Last 15days</option>
                      <option value="opel">Last 10days</option>
                      <option value="audi">Last 5days</option>
                    </select>
                  </div>
            <table className="table custom-table">
                <thead>
                    <tr>
                        <th className="w-50">Product Name</th>
                        <th className="" style={{width:"8%"}}>Stock</th>
                        <th className="" style={{width:"8%"}}>Price</th>
                        <th className="" style={{width:"8%"}}>Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-50">
                            <div className="first-col">
                                <img src="https://media.sketchfab.com/models/befd7100dc3441758fbcf3b37d66c335/thumbnails/5c9a6cf2ea9c4cc4ae8d64e1df2bfdf4/676228b14f384ef3affc4c4fb18e9557.jpeg" alt="" />
                                <div className='content mx-2'>
                                    <p style={{ margin: 0, fontWeight: 900 }}>Abstract 3D</p>
                                    <p style={{ margin: 0, fontSize: "14px", color: "rgb(200 202 207)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>

                            </div></td>
                        <td className="" style={{width:"8%"}}>32 Stock</td>
                        <td className="" style={{width:"8%"}}>$45.99</td>
                        <td className="" style={{width:"8%"}}>22</td>
                    </tr>
                    <tr>
                        <td className="w-50">
                            <div className="first-col">
                                <img src="https://media.sketchfab.com/models/befd7100dc3441758fbcf3b37d66c335/thumbnails/5c9a6cf2ea9c4cc4ae8d64e1df2bfdf4/676228b14f384ef3affc4c4fb18e9557.jpeg" alt="" />
                                <div className='content mx-2'>
                                    <p style={{ margin: 0, fontWeight: 900 }}>Abstract 3D</p>
                                    <p style={{ margin: 0, fontSize: "14px", color: "rgb(200 202 207)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>

                            </div></td>
                        <td className="" style={{width:"8%"}}>32 Stock</td>
                        <td className="" style={{width:"8%"}}>$45.99</td>
                        <td className="" style={{width:"8%"}}>22</td>
                    </tr>
                    <tr>
                        <td className="w-50">
                            <div className="first-col">
                                <img src="https://media.sketchfab.com/models/befd7100dc3441758fbcf3b37d66c335/thumbnails/5c9a6cf2ea9c4cc4ae8d64e1df2bfdf4/676228b14f384ef3affc4c4fb18e9557.jpeg" alt="" />
                                <div className='content mx-2'>
                                    <p style={{ margin: 0, fontWeight: 900 }}>Abstract 3D</p>
                                    <p style={{ margin: 0, fontSize: "14px", color: "rgb(200 202 207)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>

                            </div></td>
                        <td className="" style={{width:"8%"}}>32 Stock</td>
                        <td className="" style={{width:"8%"}}>$45.99</td>
                        <td className="" style={{width:"8%"}}>22</td>
                    </tr>
                    <tr>
                        <td className="w-50">
                            <div className="first-col">
                                <img src="https://media.sketchfab.com/models/befd7100dc3441758fbcf3b37d66c335/thumbnails/5c9a6cf2ea9c4cc4ae8d64e1df2bfdf4/676228b14f384ef3affc4c4fb18e9557.jpeg" alt="" />
                                <div className='content mx-2'>
                                    <p style={{ margin: 0, fontWeight: 900 }}>Abstract 3D</p>
                                    <p style={{ margin: 0, fontSize: "14px", color: "rgb(200 202 207)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>

                            </div></td>
                        <td className="" style={{width:"8%"}}>32 Stock</td>
                        <td className="" style={{width:"8%"}}>$45.99</td>
                        <td className="" style={{width:"8%"}}>22</td>
                    </tr>
                    <tr>
                        <td className="w-50">
                            <div className="first-col">
                                <img src="https://media.sketchfab.com/models/befd7100dc3441758fbcf3b37d66c335/thumbnails/5c9a6cf2ea9c4cc4ae8d64e1df2bfdf4/676228b14f384ef3affc4c4fb18e9557.jpeg" alt="" />
                                <div className='content mx-2'>
                                    <p style={{ margin: 0, fontWeight: 900 }}>Abstract 3D</p>
                                    <p style={{ margin: 0, fontSize: "14px", color: "rgb(200 202 207)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>

                            </div></td>
                        <td className="" style={{width:"8%"}}>32 Stock</td>
                        <td className="" style={{width:"8%"}}>$45.99</td>
                        <td className="" style={{width:"8%"}}>22</td>
                    </tr>
                    <tr>
                        <td className="w-50">
                            <div className="first-col">
                                <img src="https://media.sketchfab.com/models/befd7100dc3441758fbcf3b37d66c335/thumbnails/5c9a6cf2ea9c4cc4ae8d64e1df2bfdf4/676228b14f384ef3affc4c4fb18e9557.jpeg" alt="" />
                                <div className='content mx-2'>
                                    <p style={{ margin: 0, fontWeight: 900 }}>Abstract 3D</p>
                                    <p style={{ margin: 0, fontSize: "14px", color: "rgb(200 202 207)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>

                            </div></td>
                        <td className="" style={{width:"8%"}}>32 Stock</td>
                        <td className="" style={{width:"8%"}}>$45.99</td>
                        <td className="" style={{width:"8%"}}>22</td>
                    </tr>
                    <tr>
                        <td className="w-50">
                            <div className="first-col">
                                <img src="https://media.sketchfab.com/models/befd7100dc3441758fbcf3b37d66c335/thumbnails/5c9a6cf2ea9c4cc4ae8d64e1df2bfdf4/676228b14f384ef3affc4c4fb18e9557.jpeg" alt="" />
                                <div className='content mx-2'>
                                    <p style={{ margin: 0, fontWeight: 900 }}>Abstract 3D</p>
                                    <p style={{ margin: 0, fontSize: "14px", color: "rgb(200 202 207)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>

                            </div></td>
                        <td className="" style={{width:"8%"}}>32 Stock</td>
                        <td className="" style={{width:"8%"}}>$45.99</td>
                        <td className="" style={{width:"8%"}}>22</td>
                    </tr>

                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

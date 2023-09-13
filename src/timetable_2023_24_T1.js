import React from 'react';
// import './timetable.css';

function timetable() {
    return (
      <>
      <h1>Weekly Schedule</h1>
        {/* <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link
            id="PSSTYLEDEF_TANGERINE_1_css"
            rel="stylesheet"
            type="text/css"
            href="./PSSTYLEDEF_TANGERINE_1.css"
          />
          <title>Weekly Schedule</title>
        </head> */}

          <table>
            <tbody>
              <tr>
                <td>
                  <table
                    role="presentation"
                    border="0"
                    id="ACE_width"
                    cellpadding="0"
                    cellspacing="0"
                    cols="11"
                    width="817"
                  >
                    <tbody>
                      <tr>
                        {/* <td height="45" colspan="3"></td> */}
                        <td valign="top" align="left">
                          <table
                            cellspacing="0"
                            role="presentation"
                            dir="ltr"
                            cols="1"
                            width="776"
                            cellpadding="0"
                          >
                            <tbody>
                              <tr>
                                <td class="PSLEVEL1GRIDLABEL" align="left">
                                  <div id="win0divSSR_DUMMY_RECGP$0">Schedule</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <table
                                    dir="ltr"
                                    border="0"
                                    cellpadding="2"
                                    cellspacing="0"
                                    cols="1"
                                    // width="100%"
                                    // class="PSLEVEL1GRID"
                                    // style="border-style:none"
                                  >
                                    <tbody>
                                      <tr id="trSSR_DUMMY_REC$0_row1" valign="center">
                                        <td
                                          // align="left"
                                          // width="702"
                                          // height="18"
                                        >
                                          <div id="win0divDERIVED_CLASS_S_HTMLAREA$0">
                                            {/* <div style="min-width:702px; "> </div> */}
                                            <div>
                                              <table
                                                cellspacing="0"
                                                cellpadding="2"
                                                // width="100%"
                                                // class="PSLEVEL3GRIDODDROW"
                                                id="WEEKLY_SCHED_HTMLAREA"
                                                summary="Weekly Schedule"
                                              >
                                                <colgroup span="1" width="9%" align="center" valign="middle"></colgroup>
                                                <colgroup span="7" width="13%" align="center" valign="middle"></colgroup>
                                                <tbody>
                                                  <tr>
                                                    <th scope="col" align="center" class="PSLEVEL3GRIDODDROW">
                                                      Time
                                                    </th>
                                                    <th scope="col" align="center" class="PSLEVEL3GRIDODDROW">
                                                      Monday<br /> Oct 30
                                                    </th>
                                                    <th scope="col" align="center" class="PSLEVEL3GRIDODDROW">
                                                      Tuesday<br /> Oct 31
                                                    </th>
                                                    <th scope="col" align="center" class="PSLEVEL3GRIDODDROW">
                                                      Wednesday<br /> Nov 1
                                                    </th>
                                                    <th scope="col" align="center" class="PSLEVEL3GRIDODDROW">
                                                      Thursday<br /> Nov 2
                                                    </th>
                                                    <th scope="col" align="center" class="PSLEVEL3GRIDODDROW">
                                                      Friday<br /> Nov 3
                                                    </th>
                                                    <th scope="col" align="center" class="PSLEVEL3GRIDODDROW">
                                                      Saturday<br /> Nov 4
                                                    </th>
                                                    <th scope="col" align="center" class="PSLEVEL3GRIDODDROW">
                                                      Sunday<br /> Nov 5
                                                    </th>
                                                  </tr>
                                                  <tr>
                                                    <td class="PSLEVEL3GRIDODDROW">&nbsp;</td>
                                                    <td class="PSLEVEL3GRIDODDROW">&nbsp;</td>
                                                    <td class="PSLEVEL3GRIDODDROW">&nbsp;</td>
                                                    <td class="PSLEVEL3GRIDODDROW">&nbsp;</td>
                                                    <td class="PSLEVEL3GRIDODDROW">&nbsp;</td>
                                                    {/* <td class="PSLEVEL3GRIDODDROW" rowspan="6" style="color:rgb(0,0,0);background-color:rgb(182,209,146);text-align: center;">
                                                      <span class="" style="color:rgb(0,0,0);background-color:rgb(182,209,146);">
                                                        FINA 4150 - A<br />Quan Methods for Fin'l Deriva<br />Lecture<br />9:30AM - 12:15PM<br />Esther Lee Bldg 401<br />Instructors: <br />Professor LAW Ka Fai
                                                      </span>
                                                    </td> */}
                                                    <td class="PSLEVEL3GRIDODDROW">&nbsp;</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
      </>
    );
}

export default timetable;

var webshot = require('webshot');

var options = {
	siteType: 'html',
	screenSize: {
		width: 1000,
		height: 1000
	},
	shotSize: {
		width: 'window',
		height: 'window'
	}
}

var email = `
<html xmlns="http://www.w3.org/1999/xhtml" style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" ><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <title>
      Jaycar Newsletter
    </title>
    <style type="text/css">
     body,html {
          margin: 0;
          padding: 0;
     }
     img {
           display: block;
           border: none;
     }
     a {
           text-decoration: none;
     }
     #container {
           margin: 0;
           padding: 0;
           border: 1px solid #CCCCCC;
     }
     .product-img {
          margin: 0;
                  align-content:left;  
     }
     
     .left {
          padding: 8px 4px 8px 8px;
     }
     
     .right {
          padding: 2px 2px 2px 2px;
     }
     
     .center {
          padding: 8px 4px;
     }
     
     .border {
          border: 0 solid #eeeeee;
     }
     
     .product-des {
          margin: 0;
          padding: 0 10px;
          font-family: Tahoma, Geneva, sans-serif;
          font-size: 20px;
     }
     
     .product-des a {
          color: #000000;
     }
     .product-price {
          margin: 0;
          padding: 0 10px 10px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 21px;
     }
     .product-price a {
          color: #000000;
     }
     .section-heading {
           margin: 0;
           padding: 5px 10px;
           background-color: #FF6600;
           color: #212236;
           font-family: Arial, Helvetica, sans-serif;
           font-size: 35px;
           letter-spacing: 1px;
     }
     .copy {
           margin: 0;
           padding: 10px;
           color: #000000;
           font-family: Arial, Helvetica, sans-serif;
           font-size: 12px;
     }
     .nav-item {
           margin: 0;
           padding: 10px 0;
           background-color: #052D6E;
           font-family: Arial, Helvetica, sans-serif;
           font-size: 20px;
     }     
     .nav-item a {
          color: #212236;
     }
     .terms-and-conditions {
          margin: 0;
          padding: 0 10px 10px;
          font-family: Arial,Helvetica,sans-serif;
          text-align: justify;
          font-size: 11px;
     }
     #social-links td {
          padding: 10px 0;
     }
    
    </style>
  <meta name="robots" content="noindex,nofollow"></meta>
<meta property="og:title" content="Jaycar Electronics &#9658; Your Experts in Tech"></meta>
</head>
  <body style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
    <table bgcolor="#212236" cellspacing="0" cellpadding="0" border="0" width="100%" align="center" style="border-collapse:collapse;" >
      <tbody><tr>
        <td>
          
          <table cellspacing="0" cellpadding="0" border="0" width="600" align="center" bgcolor="#ffffff">
            <tbody><tr>
             
              <td width="600" valign="top" align="center">
                <p class="copy" style="color:#000000;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;font-family:Arial, Helvetica, sans-serif;font-size:12px;" >Jaycar Electronics ► Your Experts in Tech<br>
<br>
Is the email not displaying correctly?
                  <a href="http://email.jaycar.com.au/t/r-e-ykdkuiit-tiijmpii-jk/" style="color:#000000;text-decoration:underline;" >Click here</a> to access the web version.
                </p>
              </td>
            </tr>
          </tbody></table>
          
          </td>
          </tr>
          <tr>
          <td>
         <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                  <tbody><tr>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-r/" target="_blank" style="text-decoration:none;" ><img src="http://i4.createsend1.com/ei/r/FF/768/629/161838/images/logoheader/header_01.jpg" alt="Jaycar Electronics" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-y/" target="_blank" style="text-decoration:none;" ><img src="http://i7.createsend1.com/ei/r/FF/768/629/161838/images/logoheader/header_02.jpg" alt="" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-j/" target="_blank" style="text-decoration:none;" ><img src="http://i8.createsend1.com/ei/r/FF/768/629/161838/images/logoheader/header_03.png" alt="FB" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-t/" target="_blank" style="text-decoration:none;" ><img src="http://i5.createsend1.com/ei/r/FF/768/629/161838/images/logoheader/header_04.png" alt="TW" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-i/" target="_blank" style="text-decoration:none;" ><img src="http://i10.createsend1.com/ei/r/FF/768/629/161838/images/logoheader/header_05.png" alt="YT" style="display:block;border-style:none;" ></a>
                    </td>
                  </tr>
                </tbody></table>
        </td>
      </tr>
      <tr>
      <td>
       <table cellspacing="0" cellpadding="0" border="0" align="center" width="600">
                  <tbody><tr>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-d/" target="_blank" style="text-decoration:none;" ><img src="http://i6.createsend1.com/ei/r/FF/768/629/161838/images/topnav/topnav_1.jpg" alt="Specials" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-h/" target="_blank" style="text-decoration:none;" ><img src="http://i9.createsend1.com/ei/r/FF/768/629/161838/images/topnav/topnav_2.jpg" alt="New Products" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-k/" target="_blank" style="text-decoration:none;" ><img src="http://i3.createsend1.com/ei/r/FF/768/629/161838/images/topnav/topnav_3.jpg" alt="Catalogues" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-u/" target="_blank" style="text-decoration:none;" ><img src="http://i1.createsend1.com/ei/r/FF/768/629/161838/images/topnav/topnav_4.jpg" alt="Find Stores" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-o/" target="_blank" style="text-decoration:none;" ><img src="http://i2.createsend1.com/ei/r/FF/768/629/161838/images/topnav/topnav_5.jpg" alt="Contact Us" style="display:block;border-style:none;" ></a>
                    </td>
                  </tr>
                </tbody></table>
      </td>
      </tr>
     <tr>
      <td>
            <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                  <tbody><tr>
                    <td align="center">
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-b/" target="_blank" style="text-decoration:none;" ><img src="http://i4.createsend1.com/ei/r/FF/768/629/161838/images/flyer-banner-2.png" alt="Your Experts In Tech" style="display:block;border-style:none;" ></a>
                    </td>
                  </tr>
                  </tbody></table>
        </td>
     </tr>
          <tr>
      <td>
            <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                  <tbody><tr>
                    <td align="center">
                      <img src="http://i6.createsend1.com/ei/r/FF/768/629/161838/images/keepintouch.png" alt="Keep In Touch" style="display:block;border-style:none;" >
                    </td>
                  </tr>
                  <tr>
                  	<td align="center">
                    <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                        <tbody>
                        <tr>
                          <td class="product-img, right" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-n/" target="_blank" style="text-decoration:none;" ><img alt="On The Land" src="http://i5.createsend1.com/ei/r/FF/768/629/161838/images/ontheland.png" width="193" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                          <td class="product-img, right" align="left" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-p/" target="_blank" style="text-decoration:none;" ><img alt="On The Road" src="http://i7.createsend1.com/ei/r/FF/768/629/161838/images/ontheroad.png" width="193" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                          <td class="product-img, right" align="left" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-x/" target="_blank" style="text-decoration:none;" ><img alt="On The Water" src="http://i9.createsend1.com/ei/r/FF/768/629/161838/images/onthewater.png" width="193" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
<tr>
                    <td align="center">
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-m/" target="_blank" style="text-decoration:none;" ><img src="http://i8.createsend1.com/ei/r/FF/768/629/161838/images/ge4100.png" alt="GE4100" width="600" height="200" style="display:block;border-style:none;" ></a>
                    </td>
                  </tr>
                  </tbody></table>
        </td>
     </tr>
          <tr>
      <td>
            <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                  <tbody><tr>
                    <td align="center">
                      <img src="http://i2.createsend1.com/ei/r/FF/768/629/161838/images/forallyourhdmineeds.png" alt="For All Your HDMI Needs" style="display:block;border-style:none;" >
                    </td>
                  </tr>
                  <tr>
                  	<td align="center">
                    <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                        <tbody>
                        <tr>
                          <td class="product-img, right" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-c/" target="_blank" style="text-decoration:none;" ><img alt="Splitters" src="http://i5.createsend1.com/ei/r/FF/768/629/161838/images/splitters.png" width="193" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                          <td class="product-img, right" align="left" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-q/" target="_blank" style="text-decoration:none;" ><img alt="Switchers" src="http://i1.createsend1.com/ei/r/FF/768/629/161838/images/switchers.png" width="193" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                          <td class="product-img, right" align="left" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-a/" target="_blank" style="text-decoration:none;" ><img alt="Converters" src="http://i4.createsend1.com/ei/r/FF/768/629/161838/images/converters.png" width="193" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
<tr>
                    <td align="center">
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-f/" target="_blank" style="text-decoration:none;" ><img src="http://i10.createsend1.com/ei/r/FF/768/629/161838/images/mb3734.png" alt="MB3734" width="600" height="200" style="display:block;border-style:none;" ></a>
                    </td>
                  </tr>
                  </tbody></table>
        </td>
     </tr>
          <tr>
      <td>
            <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                  <tbody><tr>
                    <td align="center">
                      <img src="http://i6.createsend1.com/ei/r/FF/768/629/161838/images/cleartvreception.png" alt="Clear TV Reception" style="display:block;border-style:none;" >
                    </td>
                  </tr>
                  <tr>
                  	<td align="center">
                    <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                        <tbody>
                        <tr>
                          <td class="product-img, right" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-z/" target="_blank" style="text-decoration:none;" ><img alt="Apartment" src="http://i3.createsend1.com/ei/r/FF/768/629/161838/images/apartment.png" width="296" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                          <td class="product-img, right" align="left" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-v/" target="_blank" style="text-decoration:none;" ><img alt="Metro" src="http://i7.createsend1.com/ei/r/FF/768/629/161838/images/metro.png" width="296" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                  <tr>
                  	<td align="center">
                    <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                        <tbody>
                        <tr>
                          <td class="product-img, right" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-e/" target="_blank" style="text-decoration:none;" ><img alt="Rural" src="http://i8.createsend1.com/ei/r/FF/768/629/161838/images/rural.png" width="296" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                          <td class="product-img, right" align="left" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-s/" target="_blank" style="text-decoration:none;" ><img alt="Caravan" src="http://i2.createsend1.com/ei/r/FF/768/629/161838/images/caravan.png" width="296" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
          <tr>
      <td>
            <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                  <tbody><tr>
                    <td align="center">
                      <img src="http://i10.createsend1.com/ei/r/FF/768/629/161838/images/specials.png" alt="Remote Control" style="display:block;border-style:none;" >
                    </td>
                  </tr>
                  <tr>
                  	<td align="center">
                    <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                        <tbody>
                        <tr>
                          <td class="product-img, right" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-g/" target="_blank" style="text-decoration:none;" ><img alt="AR3137" src="http://i3.createsend1.com/ei/r/FF/768/629/161838/images/ar3137.png" width="296" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                          <td class="product-img, right" align="left" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-w/" target="_blank" style="text-decoration:none;" ><img alt="AR1956" src="http://i9.createsend1.com/ei/r/FF/768/629/161838/images/ar1956.png" width="296" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
<tr>
      <td>
            <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                  <tbody><tr>
                    <td align="center">
                      <img src="http://i4.createsend1.com/ei/r/FF/768/629/161838/images/jaycarnowselling.png" alt="Jaycar Now Selling" style="display:block;border-style:none;" >
                    </td>
                  </tr>
                  </tbody></table>
        </td>
     </tr>
                  <tr>
                  	<td align="center">
                    <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                        <tbody>
                        <tr>
                          <td class="product-img, right" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-yd/" target="_blank" style="text-decoration:none;" ><img alt="Panasonic Cordless Phones" src="http://i1.createsend1.com/ei/r/FF/768/629/161838/images/panasonic-au.png" width="193" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                          <td class="product-img, right" align="left" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-yh/" target="_blank" style="text-decoration:none;" ><img alt="GME Radios" src="http://i5.createsend1.com/ei/r/FF/768/629/161838/images/gmeradios.png" width="193" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                          <td class="product-img, right" align="left" valign="top" style="padding-top:2px;padding-bottom:2px;padding-right:2px;padding-left:2px;" >
                          <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-yk/" target="_blank" style="text-decoration:none;" ><img alt="Swann Cameras" src="http://i9.createsend1.com/ei/r/FF/768/629/161838/images/swann.png" width="193" height="200" class="border" style="display:block;border-width:0;border-style:solid;border-color:#eeeeee;" ></a></td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
  <tr>
                <td>
                <table cellspacing="0" cellpadding="0" border="0" width="600" align="center" bgcolor="#ffffff">
                  <tbody><tr>
                    <td class="terms-and-conditions" align="left" valign="top" style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:10px;padding-right:10px;padding-left:10px;font-family:Arial,Helvetica,sans-serif;text-align:justify;font-size:11px;" >
                   <br>
                      Prices and discount offers shown are valid until 26/02/2017. While stock lasts. No rain checks. All prices are listed in Australian Dollars. All savings are based on original RRP. Prices may change at any time without notice. We endeavour to ensure all information, images and prices in this e-newsletter are correct but errors can occur for which we apologise. Please call 1800 022 888 if a product is out of stock on the website or visit <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-yu/" target="_blank" style="text-decoration:none;" >www.jaycar.com.au/store-finder</a>
                      for your nearest store.<br>
                      <br>
                      This email was sent by: Jaycar Electronics
                      320 Victoria Road Rydalmere, NSW, 2116,
                      Australia.<br>
                      <br>
                      If you no longer wish to receive our
                      newsletters click here to <a href="" style="text-decoration:none;" >unsubscribe.</a><br>
                      <br>
                    </td>
                  </tr>
                </tbody></table>
                </td>
                </tr>
                <tr>
                	<td>
                    <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                  <tbody><tr>
                    <td>
                      <img src="http://i3.createsend1.com/ei/r/FF/768/629/161838/images/footer/social_media_footer_01.png" style="display:block;border-style:none;" >
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-jl/" target="_blank" style="text-decoration:none;" ><img src="http://i7.createsend1.com/ei/r/FF/768/629/161838/images/footer/social_media_footer_02.png" alt="Facebook" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-jr/" target="_blank" style="text-decoration:none;" ><img src="http://i1.createsend1.com/ei/r/FF/768/629/161838/images/footer/social_media_footer_03.png" alt="Twitter" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-jy/" target="_blank" style="text-decoration:none;" ><img src="http://i6.createsend1.com/ei/r/FF/768/629/161838/images/footer/social_media_footer_04.png" alt="YouTube" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <img src="http://i2.createsend1.com/ei/r/FF/768/629/161838/images/footer/social_media_footer_05.png" style="display:block;border-style:none;" >
                    </td>
                  </tr>
                </tbody></table>
                    </td>
                </tr>
                <tr>
                <td>
                <table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                  <tbody><tr>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-jj/" target="_blank" style="text-decoration:none;" ><img src="http://i8.createsend1.com/ei/r/FF/768/629/161838/images/bottomnav/bottomnav_1.jpg" alt="Specials" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-jt/" target="_blank" style="text-decoration:none;" ><img src="http://i10.createsend1.com/ei/r/FF/768/629/161838/images/bottomnav/bottomnav_2.jpg" alt="New Products" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-ji/" target="_blank" style="text-decoration:none;" ><img src="http://i4.createsend1.com/ei/r/FF/768/629/161838/images/bottomnav/bottomnav_3.jpg" alt="Catalogues" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-jd/" target="_blank" style="text-decoration:none;" ><img src="http://i5.createsend1.com/ei/r/FF/768/629/161838/images/bottomnav/bottomnav_4.jpg" alt="Find Stores" style="display:block;border-style:none;" ></a>
                    </td>
                    <td>
                      <a href="http://email.jaycar.com.au/t/r-l-ykdkuiit-tiijmpii-jh/" target="_blank" style="text-decoration:none;" ><img src="http://i6.createsend1.com/ei/r/FF/768/629/161838/images/bottomnav/bottomnav_5.jpg" alt="Contact Us" style="display:block;border-style:none;" ></a>
                    </td>
                  </tr>
                </tbody></table>
                
              </td>
            </tr>
  
    </tbody></table>
</body></html>
`

webshot(email, 'hello_world.png', options, function(err) {
  // screenshot now saved to hello_world.png
  
	var lwip = require('lwip');
	lwip.open(__dirname+'/../hello_world.png', function(err, image){
		if (err != undefined) console.log(err);
		// image.contain(width, height, color, inter, callback)
    	image.contain(313, 313, 'white', function(err, image) {
			
			if (err != undefined) console.log(err);
			// image.writeFile(path, format, params, callback)
			image.writeFile(__dirname+'/../hello_world.jpg', 'jpg', {quality: 75}, function(err) { 
				if (err != undefined) console.log(err);
			}); // end image.writeFile
			
		}); // end image.contain
		
	}); // end lwip.open
	
}); // end webshot



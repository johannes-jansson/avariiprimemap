//var fs = require("fs");

// Set colors here
var colormap = new Map();
colormap.set("empty", "#333333");
colormap.set("fight", "#FF6900");
colormap.set("ateam", "#0000FF");
colormap.set("bteam", "#FF0000");

//{{{
// Start creating map
var rsr = Raphael('map', '1190.55', '841.89');
var Layer_4 = rsr.set();
var regions = [];
var path_a = rsr.path("M127.82,659.6q-12.1-20-24.23-39.9,10.66-19.13,21.79-38.59,22.94.36,45.88.59,11.7,19.94,23.39,40Q183.55,641.42,172.82,661,150.32,660.45,127.82,659.6Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a');
regions.push(path_a);
var path_b = rsr.path("M125.38,581.11q-11.84-19.8-23.52-39.38,11.37-19.42,23-39.11,23-.12,46.06-.2,11.44,19.78,23,39.71Q182.53,562,171.27,581.7,148.33,581.47,125.38,581.11Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_b');
regions.push(path_b);
var path_c = rsr.path("M196.2,701.22Q184.63,681.09,172.82,661q10.71-19.55,21.83-39.31,22.76.27,45.53.33,11.44,20,22.63,39.9-11.33,20-22.32,39.9Q218.35,701.71,196.2,701.22Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_c');
regions.push(path_c);
var path_d = rsr.path("M194.65,621.67q-11.66-20-23.39-40Q182.51,562,194,542.13q23,.05,46.06.07,11.53,20,23,39.9-11.5,20-22.85,39.9Q217.42,621.95,194.65,621.67Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_d');
regions.push(path_d);
var path_e = rsr.path("M63.34,694.7Q50.57,674.7,37.83,655q9.78-18.23,20.24-36.94,22.76.93,45.53,1.65,12.1,19.85,24.23,39.9-10.4,19.2-20.19,38.06Q85.48,696.38,63.34,694.7Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_e');
regions.push(path_e);
var path_f = rsr.path("M58.06,618.05,33.61,579.14q10.84-18.65,22.19-37.73,23,.19,46.06.33,11.66,19.56,23.52,39.38-11.11,19.44-21.79,38.59Q80.83,619,58.06,618.05Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_f');
regions.push(path_f);
var path_g = rsr.path("M124.9,502.62q-11.39-19.56-22.45-38.85,11.9-19.71,23.92-39.64,22.76-.6,45.53-1,11,19.63,22.32,39.44-11.64,20-23.25,39.84Q147.93,502.5,124.9,502.62Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_g');
regions.push(path_g);
var path_h = rsr.path("M126.36,424.13q-10.77-19.32-21-38.32,12.26-20,24.45-40.17,22.14-1.09,44.29-1.78,10.37,19.47,21.26,39.18-11.64,20.08-23.43,40.1Q149.12,423.53,126.36,424.13Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_h');
regions.push(path_h);
var path_i = rsr.path("M194,542.13q-11.57-19.91-23-39.71,11.59-19.86,23.25-39.84,22.94-.16,45.88-.2,11.44,19.94,23,39.9l-23,39.9Q217,542.18,194,542.13Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_i');
regions.push(path_i);
var path_j = rsr.path("M194.21,462.58q-11.3-19.8-22.32-39.44,11.77-20,23.43-40.1,22.5-.38,45-.46,11.17,19.91,22.63,39.9-11.33,19.92-22.85,39.9Q217.15,462.42,194.21,462.58Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_j');
regions.push(path_j);
var path_k = rsr.path("M55.8,541.41q-11.7-19.26-23-38.13,11.73-19.07,23.78-38.52,22.94-.56,45.88-1,11,19.28,22.45,38.85-11.64,19.68-23,39.11Q78.83,541.59,55.8,541.41Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_k');
regions.push(path_k);
var path_l = rsr.path("M56.56,464.76Q45.65,445.88,35.3,427.42q12.44-19.49,25-39.31,22.5-1.31,45-2.3,10.24,19,21,38.32-12,19.92-23.92,39.64Q79.5,464.2,56.56,464.76Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_l');
regions.push(path_l);
var path_m = rsr.path("M129.77,345.64q-10-19.08-19.26-37.8,12.44-20.28,24.63-40.69,21.17-1.57,42.34-2.57,9.58,19.32,19.84,38.92-11.46,20.19-23.25,40.37Q151.92,344.55,129.77,345.64Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_m');
regions.push(path_m);
var path_n = rsr.path("M135.13,267.15q-9-18.84-17.14-37.27,12.44-20.56,24.45-41.22,19.84-2.05,39.68-3.36,8.6,19.17,18.07,38.65-11.11,20.3-22.72,40.63Q156.3,265.58,135.13,267.15Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_n');
regions.push(path_n);
var path_o = rsr.path("M195.32,383q-10.86-19.69-21.26-39.18,11.77-20.17,23.25-40.37,21.7-.6,43.4-.72,10.73,19.89,21.92,39.9-11,19.9-22.32,39.9Q217.82,382.66,195.32,383Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_o');
regions.push(path_o);
var path_p = rsr.path("M197.31,303.49q-10.24-19.58-19.84-38.92,11.59-20.32,22.72-40.63,20.55-.82,41.1-1,10.11,19.87,20.86,39.9-10.44,19.88-21.44,39.9Q219,302.89,197.31,303.49Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_p');
regions.push(path_p);
var path_q = rsr.path("M8.12,281.7Q.85,264.84-5.29,248.64q14.43-20.3,28.7-41,19.84-4.29,39.68-7.84,6.34,17.19,13.81,35-13.1,20.56-26.44,40.89Q29.29,278.42,8.12,281.7Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_q');
regions.push(path_q);
var path_r = rsr.path("M60.32,388.11q-9.93-18.51-19.13-36.55,13-19.9,25.91-40.1,21.7-2.05,43.4-3.62,9.27,18.71,19.26,37.8-12.17,20.17-24.45,40.17Q82.82,386.8,60.32,388.11Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_r');
regions.push(path_r);
var path_s = rsr.path("M67.11,311.46q-8.78-18.14-16.65-35.76,13.32-20.32,26.44-40.89,20.55-2.8,41.1-4.94,8.11,18.42,17.14,37.27Q123,287.55,110.51,307.84,88.81,309.41,67.11,311.46Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_s');
regions.push(path_s);
var path_t = rsr.path("M142.45,188.66q-7.85-18.6-14.65-36.74,12.26-20.85,23.92-41.75Q169.87,107.63,188,106q7.45,19,15.94,38.39-10.57,20.41-21.83,40.89Q162.29,186.6,142.45,188.66Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_t');
regions.push(path_t);
var path_u = rsr.path("M200.19,224q-9.44-19.47-18.07-38.65,11.24-20.47,21.83-40.89,19-1,38.08-1.25,9.31,19.85,19.44,39.9-9.73,19.86-20.19,39.9Q220.74,223.13,200.19,224Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_u');
regions.push(path_u);
var path_v = rsr.path("M23.41,207.69q-5.59-16.36-9.87-32,14.78-20.85,29.24-42,18.16-5.3,36.31-9.68,4.66,16.77,10.62,34.18-13.1,20.93-26.62,41.68Q43.25,203.4,23.41,207.69Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_v');
regions.push(path_v);
var path_w = rsr.path("M76.9,234.82q-7.45-17.76-13.81-35,13.5-20.74,26.62-41.68,19-3.55,38.08-6.26,6.78,18.14,14.65,36.74-12,20.65-24.45,41.22Q97.45,232,76.9,234.82Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_w');
regions.push(path_w);
var path_x = rsr.path("M138.55,816.59q-12.1-20.53-24.58-41,8.71-18.56,18.24-37.53,21.7,1.33,43.4,2.17,11.7,20.24,23,40.5-9.86,19.53-19,38.78Q159.1,818.4,138.55,816.59Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_x');
regions.push(path_x);
var path_y = rsr.path("M132.21,738.09Q120,717.81,107.63,697.66q9.78-18.85,20.19-38.06,22.5.85,45,1.38,11.79,20.09,23.39,40.23-10.57,19.64-20.59,39Q153.91,739.42,132.21,738.09Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_y');
regions.push(path_y);
var path_z = rsr.path("M198.64,780.76q-11.3-20.24-23-40.5,10-19.4,20.59-39,22.14.49,44.29.59,11.17,20,21.92,39.9-11,20-21.44,39.9Q219.81,781.48,198.64,780.76Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_z');
regions.push(path_z);
var path_aa = rsr.path("M71.63,771.35q-13-20.37-26.22-40.5Q53.94,713,63.34,694.7q22.14,1.68,44.29,3Q120,717.8,132.21,738.09q-9.51,19-18.24,37.53Q92.8,773.77,71.63,771.35Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_aa');
regions.push(path_aa);
var path_ab = rsr.path("M532.8,649.92q-9.31-17.28-19.44-35.16,12.66-19.13,25-37.8,22.94-.82,45.88-1.78,10.51,17.17,20.19,33.65Q591.32,627,577.8,645.77,555.3,648,532.8,649.92Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ab');
regions.push(path_ab);
var path_ac = rsr.path("M538.34,577q-10.64-17.83-21.92-36.22,11.77-18.63,23-36.74,23,.27,46.06.59,11.84,17.81,23,35Q596.68,557,584.23,575.19,561.28,576.14,538.34,577Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ac');
regions.push(path_ac);
var path_ad = rsr.path("M594.8,678.11q-8-15.79-17-32.33,13.5-18.76,26.62-36.94,22.76-1.7,45.53-3.62,9.44,15.63,17.85,30.42-14.12,17.62-28.7,36Q616.95,675,594.8,678.11Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ad');
regions.push(path_ad);
var path_ae = rsr.path("M604.42,608.83q-9.66-16.47-20.19-33.65,12.44-18.12,24.32-35.62,23-.34,46.06-.72,11.13,16.4,21.39,32-12.7,16.81-26,34.37Q627.18,607.13,604.42,608.83Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ae');
regions.push(path_ae);
var path_af = rsr.path("M539.45,504q-11.79-18.38-24.05-37.27,10.71-18.12,20.73-35.69,22.76,1.37,45.53,3,13,18.44,25.51,36.28-10.44,16.81-21.66,34.31Q562.48,504.28,539.45,504Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_af');
regions.push(path_af);
var path_ag = rsr.path("M536.13,431q-12.77-18.93-25.82-38.32,9.47-17.62,18.07-34.64,22.14,2.47,44.29,5.33,14,19.08,27.64,37.6-8.85,16.13-18.64,33Q558.89,432.42,536.13,431Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ag');
regions.push(path_ag);
var path_ah = rsr.path("M608.54,539.56q-11.17-17.15-23-35,11.19-17.49,21.66-34.31,22.94,1,45.88,2.17,12.63,17.17,24.58,33.58-11.11,16-23,32.79Q631.57,539.22,608.54,539.56Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ah');
regions.push(path_ah);
var path_ai = rsr.path("M607.17,470.29q-12.5-17.83-25.51-36.28,9.78-16.85,18.64-33,22.5,2.38,45,5.07,14,17.94,27.42,35.16-9.33,15.18-19.66,31.21Q630.11,471.31,607.17,470.29Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ai');
regions.push(path_ai);
var path_aj = rsr.path("M397.81,658.68q-10.24-19-21-38.32,12-19.92,23.92-39.64,22.94-.43,45.88-1,10.91,18.88,21.26,37.34-12.44,19.49-25,39.31Q420.31,657.68,397.81,658.68Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_aj');
regions.push(path_aj);
var path_ak = rsr.path("M400.69,580.72q-11-19.28-22.45-38.85,11.64-19.68,23-39.11,23,.14,46.06.33,11.7,19.26,23,38.13-11.73,19.07-23.78,38.52Q423.63,580.29,400.69,580.72Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ak');
regions.push(path_ak);
var path_al = rsr.path("M461.94,692.92q-9.18-18-19.13-36.55,12.57-19.81,25-39.31,22.76-1,45.53-2.3,10.11,17.87,19.44,35.16-13.19,19.2-26.58,38.85Q484.08,691,461.94,692.92Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_al');
regions.push(path_al);
var path_am = rsr.path("M467.83,617.06q-10.33-18.44-21.26-37.34,12-19.44,23.78-38.52,23-.21,46.06-.46,11.26,18.38,21.92,36.22-12.3,18.65-25,37.8Q490.6,616,467.83,617.06Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_am');
regions.push(path_am);
var path_an = rsr.path("M262.81,661.91Q251.64,642,240.18,622q11.33-19.92,22.85-39.9,22.94,0,45.88-.2,11.3,19.8,22.32,39.44-11.77,20-23.43,40.1Q285.31,661.83,262.81,661.91Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_an');
regions.push(path_an);
var path_ao = rsr.path("M263,582.1q-11.44-19.94-23-39.9l23-39.9q23,0,46.06.07,11.57,19.91,23,39.71-11.59,19.86-23.25,39.84Q286,582.07,263,582.1Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ao');
regions.push(path_ao);
var path_ap = rsr.path("M329.07,700.63q-10.37-19.47-21.26-39.18,11.64-20.08,23.43-40.1,22.76-.38,45.53-1,10.77,19.32,21,38.32-12.26,20-24.45,40.17Q351.21,699.94,329.07,700.63Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ap');
regions.push(path_ap);
var path_aq = rsr.path("M331.24,621.35q-11-19.63-22.32-39.44,11.64-20,23.25-39.84,23-.08,46.06-.2,11.39,19.56,22.45,38.85-11.9,19.71-23.92,39.64Q354,621,331.24,621.35Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_aq');
regions.push(path_aq);
var path_ar = rsr.path("M401.26,502.75q-11.66-19.56-23.52-39.38,11.11-19.44,21.79-38.59,22.76.71,45.53,1.65l24.45,38.92Q458.68,484,447.33,503.08,424.3,502.89,401.26,502.75Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ar');
regions.push(path_ar);
var path_as = rsr.path("M399.54,424.79q-12.1-19.85-24.23-39.9,10.4-19.2,20.19-38.06,22.14,1.28,44.29,3,12.77,20,25.51,39.71-9.78,18.23-20.24,36.94Q422.3,425.5,399.54,424.79Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_as');
regions.push(path_as);
var path_at = rsr.path("M470.36,541.21q-11.3-18.86-23-38.13,11.33-19.07,22.19-37.73,22.94.63,45.88,1.38,12.24,18.88,24.05,37.27-11.24,18.1-23,36.74Q493.39,541,470.36,541.21Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_at');
regions.push(path_at);
var path_au = rsr.path("M469.51,465.35l-24.45-38.92q10.44-18.7,20.24-36.94,22.5,1.46,45,3.23,13,19.39,25.82,38.32-10,17.55-20.73,35.69Q492.46,466,469.51,465.35Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_au');
regions.push(path_au);
var path_av = rsr.path("M263.08,502.29q-11.53-20-23-39.9,11.5-20,22.85-39.9,22.76.05,45.53.33,11.66,20,23.39,40-11.24,19.71-22.72,39.57Q286.11,502.3,263.08,502.29Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_av');
regions.push(path_av);
var path_aw = rsr.path("M262.95,422.48q-11.44-20-22.63-39.9,11.33-20,22.32-39.9,22.14.1,44.29.59,11.57,20.13,23.39,40.23-10.71,19.55-21.83,39.31Q285.71,422.54,262.95,422.48Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_aw');
regions.push(path_aw);
var path_ax = rsr.path("M332.17,542.06q-11.44-19.78-23-39.71,11.46-19.86,22.72-39.57,22.94.23,45.88.59,11.84,19.8,23.52,39.38-11.37,19.42-23,39.11Q355.2,542,332.17,542.06Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ax');
regions.push(path_ax);
var path_ay = rsr.path("M331.86,462.78q-11.7-19.94-23.39-40,11.11-19.75,21.83-39.31,22.5.54,45,1.38,12.1,20,24.23,39.9-10.66,19.13-21.79,38.59Q354.8,463,331.86,462.78Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ay');
regions.push(path_ay);
var path_az = rsr.path("M528.37,358.08q-13.57-19.47-27.24-39.38,8-17.11,15.05-33.58,21.17,3.57,42.34,7.7,14.76,19.72,29.41,38.92-7.07,15.45-15.27,31.67Q550.51,360.55,528.37,358.08Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_az');
regions.push(path_az);
var path_ba = rsr.path("M516.18,285.12q-14.19-20-28.3-40.43,6.45-16.61,11.68-32.53,19.84,4.66,39.68,10.08,15.38,20.35,30.83,40.23-5.12,14.77-11.55,30.36Q537.35,288.69,516.18,285.12Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ba');
regions.push(path_ba);
var path_bb = rsr.path("M600.3,401q-13.65-18.51-27.64-37.6,8.18-16.21,15.27-31.67,21.7,3.74,43.4,8,15.12,18.71,29.9,36.74-7.38,14.37-15.94,29.63Q622.8,403.4,600.3,401Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bb');
regions.push(path_bb);
var path_bc = rsr.path("M587.93,331.75q-14.63-19.19-29.41-38.92,6.41-15.58,11.55-30.36,20.55,5.1,41.1,10.87,16.09,19.47,32,38.32-5.25,13.56-11.86,28.05Q609.63,335.49,587.93,331.75Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bc');
regions.push(path_bc);
var path_bd = rsr.path("M499.56,212.16q-14.63-20.57-29-41.48,4.68-16.11,8-31.48,18.16,5.76,36.31,12.45,15.83,21,31.9,41.55-3,14.09-7.47,29Q519.4,216.83,499.56,212.16Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bd');
regions.push(path_bd);
var path_be = rsr.path("M570.07,262.47q-15.43-19.87-30.83-40.23,4.46-14.94,7.47-29,19,6.46,38.08,13.76,16.89,20.24,33.8,39.9-3,12.75-7.43,26.47Q590.62,267.58,570.07,262.47Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_be');
regions.push(path_be);
var path_bf = rsr.path("M395.5,346.82q-12.37-20.13-24.58-40.43,9.51-19,18.24-37.53,21.17,1.85,42.34,4.28,13,20.37,26.22,40.5-8.53,17.82-17.93,36.15Q417.65,348.11,395.5,346.82Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bf');
regions.push(path_bf);
var path_bg = rsr.path("M389.16,268.86q-12.46-20.42-24.58-41,8.45-18.72,15.94-37,19.84,2.43,39.68,5.6,13.12,20.75,26.58,41.29-7.12,17.4-15.27,35.36Q410.33,270.71,389.16,268.86Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bg');
regions.push(path_bg);
var path_bh = rsr.path("M465.3,389.49q-12.72-19.69-25.51-39.71,9.38-18.32,17.93-36.15,21.7,2.29,43.4,5.07,13.65,19.89,27.24,39.38-8.58,17-18.07,34.64Q487.8,391,465.3,389.49Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bh');
regions.push(path_bh);
var path_bi = rsr.path("M457.73,313.64q-13.17-20.11-26.22-40.5,8.14-17.95,15.27-35.36,20.55,3.13,41.1,6.91,14.1,20.4,28.3,40.43-7,16.46-15.05,33.58Q479.43,315.93,457.73,313.64Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bi');
regions.push(path_bi);
var path_bj = rsr.path("M262.64,342.67q-11.17-20-21.92-39.9,11-20,21.44-39.9,21.17.14,42.34.86,11.3,20.24,23,40.5-10,19.4-20.59,39Q284.78,342.77,262.64,342.67Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bj');
regions.push(path_bj);
var path_bk = rsr.path("M262.15,262.87q-10.73-20-20.86-39.9,10.44-20,20.19-39.9,19.84.19,39.68,1.12,10.86,20.35,22.32,40.76-9.11,19.24-19,38.78Q283.32,263,262.15,262.87Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bk');
regions.push(path_bk);
var path_bl = rsr.path("M330.31,383.5q-11.79-20.09-23.39-40.23,10.57-19.64,20.59-39,21.7.85,43.4,2.17,12.19,20.29,24.58,40.43-9.78,18.85-20.19,38.06Q352.81,384,330.31,383.5Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bl');
regions.push(path_bl);
var path_bm = rsr.path("M327.52,304.22q-11.7-20.24-23-40.5,9.86-19.53,19-38.78,20.55,1.15,41.1,3,12.1,20.53,24.58,41-8.71,18.56-18.24,37.53Q349.22,305.06,327.52,304.22Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bm');
regions.push(path_bm);
var path_bn = rsr.path("M380.52,190.89q-12.37-20.7-24.23-41.48,7.21-18.48,13.28-36.48,18.16,3,36.31,6.91,13,21.12,26.58,42.08-5.52,17-12.26,34.57Q400.36,193.32,380.52,190.89Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bn');
regions.push(path_bn);
var path_bo = rsr.path("M446.78,237.78q-13.43-20.53-26.58-41.29,6.72-17.58,12.26-34.57,19,4,38.08,8.76,14.36,20.9,29,41.48-5.21,15.91-11.68,32.53Q467.33,240.91,446.78,237.78Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bo');
regions.push(path_bo);
var path_bp = rsr.path("M261.48,183.06q-10.11-20-19.44-39.9,9.73-20.06,18.6-39.9,18.16.23,36.31,1.38,10.24,20.46,21.26,41-8,19.09-17,38.52Q281.32,183.24,261.48,183.06Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bp');
regions.push(path_bp);
var path_bq = rsr.path("M323.49,224.94q-11.44-20.4-22.32-40.76,9-19.42,17-38.52,19,1.46,38.08,3.75,11.84,20.77,24.23,41.48-7.47,18.28-15.94,37Q344,226.09,323.49,224.94Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bq');
regions.push(path_bq);
var path_br = rsr.path("M508.42,795.84Q502.3,779.66,495,762.79q13.9-20.14,27.82-39.9,21.7-3,43.4-6.52,7.32,15.9,13.46,31Q564.64,766.91,549.52,787,529,791.73,508.42,795.84Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_br');
regions.push(path_br);
var path_bs = rsr.path("M522.83,722.88q-7.8-16.73-16.6-34.11,13.37-19.64,26.58-38.85,22.5-1.92,45-4.15,9,16.53,17,32.33Q580.64,697,566.23,716.36,544.53,719.86,522.83,722.88Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bs');
regions.push(path_bs);
var path_bt = rsr.path("M559.08,816.65Q555,802.22,549.52,787q15.09-20,30.17-39.57Q600.86,743,622,738q5.54,14.1,9.69,27.26-16.42,19.24-33,39.11Q578.92,810.87,559.08,816.65Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bt');
regions.push(path_bt);
var path_bu = rsr.path("M579.69,747.38q-6.12-15.11-13.46-31,14.39-19.4,28.57-38.26,22.14-3.06,44.29-6.52,7.58,14.86,13.94,28.84Q637.67,718.86,622,738,600.86,743,579.69,747.38Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bu');
regions.push(path_bu);
var path_bv = rsr.path("M385.13,814.61Q377,796.19,368,777.34q12.17-20.41,24.63-40.69,21.7-1.57,43.4-3.62,8.78,18.14,16.65,35.76-13.32,20.32-26.44,40.89Q405.68,812.47,385.13,814.61Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bv');
regions.push(path_bv);
var path_bw = rsr.path("M392.62,736.65q-9.27-18.71-19.26-37.8,12.17-20.17,24.45-40.17,22.5-1,45-2.3,9.93,18.51,19.13,36.55Q449,712.82,436,733,414.32,735.08,392.62,736.65Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bw');
regions.push(path_bw);
var path_bx = rsr.path("M452.67,768.78Q444.82,751.17,436,733q12.92-20.19,25.91-40.1,22.14-1.88,44.29-4.15,8.78,17.37,16.6,34.11-13.9,19.75-27.82,39.9Q473.84,766.07,452.67,768.78Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bx');
regions.push(path_bx);
var path_by = rsr.path("M261.84,821.52q-10.11-19.87-20.86-39.9,10.44-19.88,21.44-39.9,21.7-.12,43.4-.72,10.24,19.58,19.84,38.92-11.59,20.32-22.72,40.63Q282.39,821.36,261.84,821.52Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_by');
regions.push(path_by);
var path_bz = rsr.path("M262.42,741.72q-10.73-19.89-21.92-39.9,11-19.9,22.32-39.9,22.5-.08,45-.46,10.86,19.69,21.26,39.18Q317.3,720.79,305.82,741,284.12,741.6,262.42,741.72Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_bz');
regions.push(path_bz);
var path_ca = rsr.path("M325.66,779.91q-9.58-19.32-19.84-38.92,11.46-20.19,23.25-40.37,22.14-.69,44.29-1.78,10,19.08,19.26,37.8Q380.19,756.92,368,777.34,346.83,778.91,325.66,779.91Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ca');
regions.push(path_ca);
var path_cb = rsr.path("M1019.92,271.26q-12.87-16.53-25.27-32.41,8.6-14,18.12-28.76,21.14,1.06,42.29,2,11.52,16.43,23.51,33.44-9,15.53-17.18,30.4Q1040.66,273.74,1019.92,271.26Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cb');
regions.push(path_cb);
var path_cc = rsr.path("M1012.77,210.09q-11.64-15.82-22.65-30.95,10.23-14.74,21.22-30.22,21.22-.35,42.45-.67,10.3,15.8,21.22,32.22-10.32,16.12-20,31.62Q1033.92,211.15,1012.77,210.09Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cc');
regions.push(path_cc);
var path_cd = rsr.path("M1086.87,310.58Q1074,293,1061.39,275.93q8.15-14.86,17.18-30.4,21,1.47,42,2.73,11.77,17.44,23.8,35.32-8.72,16.24-16.65,31.92Q1107.27,313.22,1086.87,310.58Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cd');
regions.push(path_cd);
var path_ce = rsr.path("M1078.57,245.53q-12-17-23.51-33.44,9.62-15.49,20-31.62,21.22.29,42.45.55,10.87,16.94,22.16,34.35-9.87,16.7-19.1,32.89Q1099.55,247,1078.57,245.53Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ce');
regions.push(path_ce);
var path_cf = rsr.path("M964.42,291.47q-14-16-27.43-31.25,7.29-12.19,15.71-25.31,21,2.07,42,3.94,12.38,15.86,25.27,32.41-7.87,14.05-14.69,27.31Q984.83,295.2,964.42,291.47Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cf');
regions.push(path_cf);
var path_cg = rsr.path("M952.69,234.91q-12.58-15.18-24.49-29.55,9.25-13.06,19.47-27,21.22.41,42.45.79,11,15.12,22.65,30.95-9.5,14.76-18.12,28.76Q973.67,237,952.69,234.91Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cg');
regions.push(path_cg);
var path_ch = rsr.path("M1011.35,148.92q-10.26-15.12-19.71-29.49,11.71-15.49,24-31.68,21-1.77,42-3.34,8.91,15.18,18.61,31-11.46,16.7-22.41,32.83Q1032.57,148.57,1011.35,148.92Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ch');
regions.push(path_ch);
var path_ci = rsr.path("M1015.63,87.75q-8.7-14.41-16.45-28,13-16.24,26.45-33.13,20.41-3.19,40.82-6,7.35,14.55,15.67,29.8-12.44,17.29-24.53,34Q1036.61,86,1015.63,87.75Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ci');
regions.push(path_ci);
var path_cj = rsr.path("M1075,180.48q-10.91-16.41-21.22-32.22,10.93-16.12,22.41-32.83,21.14-.88,42.29-1.64,9.81,16.43,20.2,33.38-10.85,17.17-21.22,33.86Q1096.24,180.77,1075,180.48Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cj');
regions.push(path_cj);
var path_ck = rsr.path("M1076.2,115.42q-9.68-15.82-18.61-31,12.07-16.74,24.53-34,20.73-2.05,41.47-3.82,8.58,15.92,17.92,32.41-11.66,17.63-23,34.83Q1097.35,114.54,1076.2,115.42Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ck');
regions.push(path_ck);
var path_cl = rsr.path("M947.67,178.35q-11-14.35-21.22-27.85,11.05-13.93,22.9-28.7,21.14-1.24,42.29-2.37,9.44,14.37,19.71,29.49-11,15.47-21.22,30.22Q968.9,178.77,947.67,178.35Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cl');
regions.push(path_cl);
var path_cm = rsr.path("M949.35,121.79Q940,108.28,931.71,95.64q12.69-14.8,26-30.4,20.73-2.9,41.47-5.52,7.72,13.62,16.45,28-12.28,16.18-24,31.68Q970.49,120.55,949.35,121.79Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cm');
regions.push(path_cm);
var path_cn = rsr.path("M1165,420q-13-18.8-26.09-37.26,6.44-15.17,13.87-30.95,20,2.56,40,4.67Q1204.92,375,1217,393.78q-7.5,16.54-14.08,32.59Q1183.94,423.49,1165,420Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cn');
regions.push(path_cn);
var path_co = rsr.path("M1152.79,351.79q-12.58-18.33-25.11-36.29,7.91-15.67,16.65-31.92,20.73,1.63,41.47,3,11.73,18.15,23.51,36.59-8.64,16.89-16.53,33.32Q1172.79,354.35,1152.79,351.79Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_co');
regions.push(path_co);
var path_cp = rsr.path("M1105.7,515.94q-16.14-19.36-32.46-38.23a184.17,184.17,0,0,1,2.44-22.94q17.55,6.73,35.1,12.68,14.79,18.94,29.39,38.29a234,234,0,0,0-2.8,25.55Q1121.53,524.08,1105.7,515.94Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cp');
regions.push(path_cp);
var path_cq = rsr.path("M1075.68,454.77q-15.57-18.66-31.15-36.78,2.72-11.75,6.85-24.39,18.94,5.31,37.88,10,14.22,18.31,28.41,37.08-4.11,13.77-6.89,26.76Q1093.23,461.5,1075.68,454.77Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cq');
regions.push(path_cq);
var path_cr = rsr.path("M1140.17,505.75q-14.58-19.34-29.39-38.29,2.76-13,6.89-26.76,18.28,5,36.57,9.29,13.48,19,26.74,38.23-4.31,14.84-7.34,29Q1156.9,511.91,1140.17,505.75Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cr');
regions.push(path_cr);
var path_cs = rsr.path("M1039.78,461.14q-17.16-18.49-34.3-36.35a142.42,142.42,0,0,1,2.48-20.21q18.28,7,36.57,13.41,15.57,18.11,31.15,36.78a184.16,184.16,0,0,0-2.44,22.94Q1056.51,469.85,1039.78,461.14Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cs');
regions.push(path_cs);
var path_ct = rsr.path("M1051.37,393.6q-14.83-17.95-29.52-35.32,4.84-12.5,10.93-25.85,20,3.89,40,7.34,13.48,17.68,27.11,35.86-5.9,14.36-10.65,28Q1070.31,398.91,1051.37,393.6Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ct');
regions.push(path_ct);
var path_cu = rsr.path("M1032.79,332.43q-13.93-17.24-27.56-33.86,6.8-13.24,14.69-27.31,20.73,2.48,41.47,4.67Q1074,293,1086.87,310.58q-7.54,14.94-14.08,29.19Q1052.79,336.32,1032.79,332.43Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cu');
regions.push(path_cu);
var path_cv = rsr.path("M1117.66,440.69q-14.18-18.76-28.41-37.08,4.72-13.61,10.65-28,19.51,3.81,39,7.1Q1152,401.19,1165,420q-5.95,15.31-10.77,30Q1135.95,445.68,1117.66,440.69Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cv');
regions.push(path_cv);
var path_cw = rsr.path("M1099.9,375.64q-13.6-18.17-27.11-35.86,6.52-14.24,14.08-29.19,20.41,2.64,40.82,4.92,12.5,17.95,25.11,36.29-7.42,15.77-13.87,30.95Q1119.4,379.45,1099.9,375.64Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cw');
regions.push(path_cw);
var path_cx = rsr.path("M1008,404.58q-16.26-17.66-32.34-34.65,2.88-10.45,7.21-21.91,19.51,5.39,39,10.26,14.67,17.36,29.52,35.32-4.11,12.64-6.85,24.39Q1026.24,411.63,1008,404.58Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cx');
regions.push(path_cx);
var path_cy = rsr.path("M982.84,348q-15.2-16.84-30-33,5.17-11.32,11.63-23.61,20.41,3.73,40.82,7.1,13.6,16.61,27.56,33.86-6.07,13.35-10.93,25.85Q1002.35,353.42,982.84,348Z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_cy');
regions.push(path_cy);

Layer_4.attr({'id': 'Layer_4','data-name': 'Layer 4','name': 'Layer_4'});
var rsrGroups = [Layer_4];
Layer_4.push( path_a , path_b , path_c , path_d , path_e , path_f , path_g , path_h , path_i , path_j , path_k , path_l , path_m , path_n , path_o , path_p , path_q , path_r , path_s , path_t , path_u , path_v , path_w , path_x , path_y , path_z , path_aa , path_ab , path_ac , path_ad , path_ae , path_af , path_ag , path_ah , path_ai , path_aj , path_ak , path_al , path_am , path_an , path_ao , path_ap , path_aq , path_ar , path_as , path_at , path_au , path_av , path_aw , path_ax , path_ay , path_az , path_ba , path_bb , path_bc , path_bd , path_be , path_bf , path_bg , path_bh , path_bi , path_bj , path_bk , path_bl , path_bm , path_bn , path_bo , path_bp , path_bq , path_br , path_bs , path_bt , path_bu , path_bv , path_bw , path_bx , path_by , path_bz , path_ca , path_cb , path_cc , path_cd , path_ce , path_cf , path_cg , path_ch , path_ci , path_cj , path_ck , path_cl , path_cm , path_cn , path_co , path_cp , path_cq , path_cr , path_cs , path_ct , path_cu , path_cv , path_cw , path_cx , path_cy );

// Change some stuff, 'cause I'm to lazy to ^F
for(var i = 0; i< regions.length; i++) {
  regions[i].attr({"stroke-width":3});
  regions[i].attr({"stroke":"black"});
}

// Initiate the states array
var states = [];
for(var i = 0; i< regions.length; i++) {
  states.push("empty");
}
///}}}

function redrawMap() {
  for(var i = 0; i< regions.length; i++) {
    regions[i].attr({"fill":colormap.get(states[i])});
  }
}
redrawMap();

function updateState(i) {
  if (states[i] == "empty") {
    states[i] = "fight";
  } else if (states[i] == "fight") {
    states[i] = "ateam";
  } else if (states[i] == "ateam") {
    states[i] = "bteam";
  } else if (states[i] == "bteam") {
    states[i] = "empty";
  }
  redrawMap();
}
$(document).ready(function(){
});

//{{{ Manually attach listeners...
/*
	$('.cls-1').on('click', function(){
		console.log('.cls-1:');
		var state = $(this).attr('data-state');
		updateState(state);
	});
	*/
$(regions[0].node).click(function(){updateState(0)});
$(regions[1].node).click(function(){updateState(1)});
$(regions[2].node).click(function(){updateState(2)});
$(regions[3].node).click(function(){updateState(3)});
$(regions[4].node).click(function(){updateState(4)});
$(regions[5].node).click(function(){updateState(5)});
$(regions[6].node).click(function(){updateState(6)});
$(regions[7].node).click(function(){updateState(7)});
$(regions[8].node).click(function(){updateState(8)});
$(regions[9].node).click(function(){updateState(9)});
$(regions[10].node).click(function(){updateState(10)});
$(regions[11].node).click(function(){updateState(11)});
$(regions[12].node).click(function(){updateState(12)});
$(regions[13].node).click(function(){updateState(13)});
$(regions[14].node).click(function(){updateState(14)});
$(regions[15].node).click(function(){updateState(15)});
$(regions[16].node).click(function(){updateState(16)});
$(regions[17].node).click(function(){updateState(17)});
$(regions[18].node).click(function(){updateState(18)});
$(regions[19].node).click(function(){updateState(19)});
$(regions[20].node).click(function(){updateState(20)});
$(regions[21].node).click(function(){updateState(21)});
$(regions[22].node).click(function(){updateState(22)});
$(regions[23].node).click(function(){updateState(23)});
$(regions[24].node).click(function(){updateState(24)});
$(regions[25].node).click(function(){updateState(25)});
$(regions[26].node).click(function(){updateState(26)});
$(regions[27].node).click(function(){updateState(27)});
$(regions[28].node).click(function(){updateState(28)});
$(regions[29].node).click(function(){updateState(29)});
$(regions[30].node).click(function(){updateState(30)});
$(regions[31].node).click(function(){updateState(31)});
$(regions[32].node).click(function(){updateState(32)});
$(regions[33].node).click(function(){updateState(33)});
$(regions[34].node).click(function(){updateState(34)});
$(regions[35].node).click(function(){updateState(35)});
$(regions[36].node).click(function(){updateState(36)});
$(regions[37].node).click(function(){updateState(37)});
$(regions[38].node).click(function(){updateState(38)});
$(regions[39].node).click(function(){updateState(39)});
$(regions[40].node).click(function(){updateState(40)});
$(regions[41].node).click(function(){updateState(41)});
$(regions[42].node).click(function(){updateState(42)});
$(regions[43].node).click(function(){updateState(43)});
$(regions[44].node).click(function(){updateState(44)});
$(regions[45].node).click(function(){updateState(45)});
$(regions[46].node).click(function(){updateState(46)});
$(regions[47].node).click(function(){updateState(47)});
$(regions[48].node).click(function(){updateState(48)});
$(regions[49].node).click(function(){updateState(49)});
$(regions[50].node).click(function(){updateState(50)});
$(regions[51].node).click(function(){updateState(51)});
$(regions[52].node).click(function(){updateState(52)});
$(regions[53].node).click(function(){updateState(53)});
$(regions[54].node).click(function(){updateState(54)});
$(regions[55].node).click(function(){updateState(55)});
$(regions[56].node).click(function(){updateState(56)});
$(regions[57].node).click(function(){updateState(57)});
$(regions[58].node).click(function(){updateState(58)});
$(regions[59].node).click(function(){updateState(59)});
$(regions[60].node).click(function(){updateState(60)});
$(regions[61].node).click(function(){updateState(61)});
$(regions[62].node).click(function(){updateState(62)});
$(regions[63].node).click(function(){updateState(63)});
$(regions[64].node).click(function(){updateState(64)});
$(regions[65].node).click(function(){updateState(65)});
$(regions[66].node).click(function(){updateState(66)});
$(regions[67].node).click(function(){updateState(67)});
$(regions[68].node).click(function(){updateState(68)});
$(regions[69].node).click(function(){updateState(69)});
$(regions[70].node).click(function(){updateState(70)});
$(regions[71].node).click(function(){updateState(71)});
$(regions[72].node).click(function(){updateState(72)});
$(regions[73].node).click(function(){updateState(73)});
$(regions[74].node).click(function(){updateState(74)});
$(regions[75].node).click(function(){updateState(75)});
$(regions[76].node).click(function(){updateState(76)});
$(regions[77].node).click(function(){updateState(77)});
$(regions[78].node).click(function(){updateState(78)});
$(regions[79].node).click(function(){updateState(79)});
$(regions[80].node).click(function(){updateState(80)});
$(regions[81].node).click(function(){updateState(81)});
$(regions[82].node).click(function(){updateState(82)});
$(regions[83].node).click(function(){updateState(83)});
$(regions[84].node).click(function(){updateState(84)});
$(regions[85].node).click(function(){updateState(85)});
$(regions[86].node).click(function(){updateState(86)});
$(regions[87].node).click(function(){updateState(87)});
$(regions[88].node).click(function(){updateState(88)});
$(regions[89].node).click(function(){updateState(89)});
$(regions[90].node).click(function(){updateState(90)});
$(regions[91].node).click(function(){updateState(91)});
$(regions[92].node).click(function(){updateState(92)});
$(regions[93].node).click(function(){updateState(93)});
$(regions[94].node).click(function(){updateState(94)});
$(regions[95].node).click(function(){updateState(95)});
$(regions[96].node).click(function(){updateState(96)});
$(regions[97].node).click(function(){updateState(97)});
$(regions[98].node).click(function(){updateState(98)});
$(regions[99].node).click(function(){updateState(99)});
$(regions[100].node).click(function(){updateState(100)});
$(regions[101].node).click(function(){updateState(101)});
$(regions[102].node).click(function(){updateState(102)});
//}}}

function save(){
  localStorage.setItem('states',states);
}

function load(){
  states = localStorage.getItem('states').split(',');
  redrawMap();
}

function reset(){
  states = [];
  for(var i = 0; i< regions.length; i++) {
    states.push("empty");
  }
  redrawMap();
}


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

regions.push(rsr.path("M1041.6,321.3c-10.7,0.6-21.4,1.4-32.1,2.5c-6.2,8.9-12.3,17.3-17.7,25c5.5,7.7,11.5,16.1,17.7,25c10.7,1.1,21.4,1.9,32.1,2.5c4.9-8.9,10.2-18.1,15.7-27.5C1051.8,339.4,1046.5,330.2,1041.6,321.3z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M1137.8,323.8c-10.7-1.1-21.4-1.9-32.1-2.5c-4.9,8.9-10.2,18.1-15.7,27.5c5.5,9.4,10.8,18.6,15.7,27.5c10.7-0.6,21.4-1.4,32.1-2.5c6.2-8.9,12.3-17.3,17.7-25C1150,341.1,1144,332.7,1137.8,323.8z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M1137.8,373.8c-10.7,1.1-21.4,1.9-32.1,2.5c-5.8,9.4-11.6,19.1-17,28.8c4.6,9.1,8.6,17.9,11.7,26.3c8.9-1.7,17.8-4.2,26.7-7.5c7.1-10,14.5-19.7,21.7-28.8C1146,388.8,1142.2,381.6,1137.8,373.8z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M1088.7,292.5c-10-0.6-20-0.6-30.1,0c-5.5,9.7-11.2,19.3-17,28.8c4.9,8.9,10.2,18.1,15.7,27.5c10.9,0,21.8,0,32.7,0c5.5-9.4,10.8-18.6,15.7-27.5C1099.9,311.8,1094.1,302.1,1088.7,292.5z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M1127,273.7c-8.9-3.3-17.8-5.8-26.7-7.5c-3.1,8.3-7.1,17.2-11.7,26.3c5.5,9.7,11.2,19.3,17,28.8c10.7,0.6,21.4,1.4,32.1,2.5c4.4-7.8,8.2-14.9,11-21.3C1141.5,293.4,1134.2,283.7,1127,273.7z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M1046.9,266.2c-8.9,1.7-17.8,4.2-26.7,7.5c-7.1,10-14.5,19.7-21.7,28.8c2.8,6.3,6.6,13.5,11,21.3c10.7-1.1,21.4-1.9,32.1-2.5c5.8-9.4,11.6-19.1,17-28.8C1054.1,283.4,1050.1,274.6,1046.9,266.2z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M398.8,85.8c-12.2-0.7-24.5-0.7-36.7,0c-6.1,8.4-12.2,17-18.3,25.7c6.1,7.3,12.2,14.8,18.3,22.5c12.2-0.7,24.5-0.7,36.7,0c6.1-7.7,12.2-15.2,18.3-22.5C411,102.8,404.9,94.2,398.8,85.8z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M453.3,118c-12-2.9-24.1-5.1-36.3-6.5c-6.1,7.3-12.2,14.8-18.3,22.5c6.1,8.4,12.2,17,18.3,25.7c12.2,1.4,24.3,3.6,36.3,6.5c6-6.6,11.9-13,17.9-19.2C465.3,137.2,459.3,127.5,453.3,118z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M343.7,111.5c-12.2,1.4-24.3,3.6-36.3,6.5c-6,9.5-11.9,19.1-17.9,29c5.9,6.2,11.9,12.6,17.9,19.2c12-2.9,24.1-5.1,36.3-6.5c6.1-8.8,12.2-17.3,18.3-25.7C355.9,126.4,349.8,118.9,343.7,111.5z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M398.8,134c-12.2-0.7-24.5-0.7-36.7,0c-6.1,8.4-12.2,17-18.3,25.7c6.1,7.3,12.2,14.8,18.3,22.5c12.2-0.7,24.5-0.7,36.7,0c6.1-7.7,12.2-15.2,18.3-22.5C411,151,404.9,142.4,398.8,134z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M940.6,735.8c-14.2-1.6-28.3-3.3-42.5-4.9c-2.7,12.6-4.7,25.1-6,37.5c12.8,14,26.4,28,40.6,41.7c14.2,1.6,28.3,3.3,42.5,4.9c-0.1-12.1,0.6-24.4,1.9-36.8C964.3,764.2,952.1,750,940.6,735.8L940.6,735.8z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M922.7,655.4c-14.2-1.6-28.3-3.3-42.5-4.9c-5.5,12.5-10.3,25.1-14.4,37.7c10.1,14.2,20.8,28.5,32.3,42.7c14.2,1.6,28.3,3.3,42.5,4.9c2.7-12.6,6.1-25.2,10.2-37.8C940.8,683.7,931.4,669.5,922.7,655.4L922.7,655.4z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M865.8,688.2c-14.2-1.6-28.3-3.3-42.5-4.9c-4.1,12.6-7.5,25.2-10.2,37.8c11.5,14.2,23.6,28.4,36.5,42.4c14.2,1.6,28.3,3.3,42.5,4.9c1.3-12.4,3.3-24.9,6-37.5C886.7,716.7,875.9,702.4,865.8,688.2L865.8,688.2z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M795.3,640.7c-14.2-1.6-28.3-3.3-42.5-4.9c-5.5,12.5-10.3,25.1-14.4,37.7c10.1,14.2,20.8,28.5,32.3,42.7c14.2,1.6,28.3,3.3,42.5,4.9c2.7-12.6,6.1-25.2,10.2-37.8C813.3,669.1,803.9,654.8,795.3,640.7L795.3,640.7z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M794.4,562.2c-14.2-1.6-28.3-3.3-42.5-4.9c-8.4,11.9-16,24.1-23,36.4c7.2,13.9,15.2,28,23.8,42.1c14.2,1.6,28.3,3.3,42.5,4.9c5.5-12.5,11.7-24.9,18.7-37.2C806.7,589.6,800.2,575.8,794.4,562.2L794.4,562.2z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M811,488.8c-14.2-1.6-28.3-3.3-42.5-4.9c-11.3,10.8-21.9,22-31.7,33.4c4.3,13.1,9.4,26.4,15.1,40c14.2,1.6,28.3,3.3,42.5,4.9c8.4-11.9,17.5-23.6,27.3-35.1C817.4,514,813.9,501.2,811,488.8L811,488.8z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M415,363.9c-12.6-2.4-25.2-4.6-37.8-6.6c-4.4,9.7-9.2,19.6-14.3,29.8c7.8,11.6,15.7,23.1,23.4,34.5c13.1,1.3,26.3,2.7,39.4,4.2c5.2-9.5,10-18.9,14.5-27.9C431.9,386.7,423.5,375.4,415,363.9z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M187,270.6c-11.8-0.2-23.6-0.2-35.4,0c-6.1,11.8-12.5,23.7-19,35.6c5.7,11.5,11.7,23,17.8,34.6c12.6-0.2,25.2-0.2,37.8,0c6.1-11.6,12.1-23.2,17.8-34.6C199.5,294.3,193.2,282.4,187,270.6z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M242.7,308.1c-12.2-0.9-24.5-1.5-36.7-1.9c-5.7,11.5-11.7,23-17.8,34.6c6.5,11.8,13.1,23.6,19.8,35.5c12.9,0.3,25.8,0.7,38.7,1.3c5.9-11.3,11.6-22.5,17-33.5C256.7,332.1,249.6,320.1,242.7,308.1z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M362.9,387.1c-12.9-1.5-25.8-2.8-38.7-4c-5.3,10.6-10.9,21.3-16.8,32.2c7.3,11.7,14.7,23.3,21.9,34.9c13.3,0.7,26.7,1.4,40,2.2c5.9-10.5,11.6-20.7,17-30.8C378.6,410.2,370.7,398.7,362.9,387.1z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M425.8,425.7c-13.1-1.5-26.3-2.9-39.4-4.2c-5.4,10.1-11.1,20.3-17,30.8c7.4,11.3,14.8,22.5,22,33.4c13.5,0.5,26.9,1.1,40.4,1.8c6.1-10,12-19.7,17.6-29.2C441.6,447.7,433.7,436.8,425.8,425.7z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M188.2,340.8c-12.6-0.2-25.2-0.2-37.8,0c-6.5,11.8-13.1,23.6-19.8,35.5c6.2,11.5,12.5,23.1,19,34.8c13.1-0.1,26.3-0.1,39.4,0c6.5-11.6,12.8-23.3,19-34.8C201.3,364.4,194.7,352.6,188.2,340.8z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M246.8,377.6c-12.9-0.6-25.8-1-38.7-1.3c-6.2,11.5-12.5,23.1-19,34.8c6.7,11.8,13.5,23.5,20.3,35.3c13.3,0.2,26.7,0.4,40,0.7c6.4-11.4,12.6-22.7,18.6-34C260.9,401.4,253.8,389.5,246.8,377.6z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M307.4,415.2c-13.1-0.8-26.3-1.5-39.4-2.1c-6,11.2-12.3,22.5-18.6,34c7,11.7,14,23.5,20.9,35.1c13.5,0.2,26.9,0.5,40.4,0.9c6.4-11.1,12.7-22.1,18.7-33C322.1,438.6,314.8,427,307.4,415.2z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M369.4,452.4c-13.3-0.8-26.7-1.6-40-2.2c-6.1,10.8-12.3,21.9-18.7,33c7.1,11.5,14,22.9,20.9,34.1c13.5,0.1,27,0.3,40.6,0.4c6.6-10.8,13-21.4,19.3-31.9C384.2,474.8,376.8,463.7,369.4,452.4z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M431.8,487.6c-13.5-0.6-26.9-1.2-40.4-1.8c-6.2,10.4-12.7,21.1-19.3,31.9c6.9,11,13.7,21.8,20.3,32.4c13.5-0.2,27-0.4,40.6-0.6c7-10.4,13.7-20.6,20.3-30.6C446.3,508.6,439.1,498.2,431.8,487.6z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M189.1,411.1c-13.1-0.1-26.3-0.1-39.4,0c-6.7,11.8-13.5,23.5-20.3,35.3c6.5,11.6,13.1,23.3,19.8,34.9c13.5,0,26.9,0,40.4,0c6.7-11.7,13.3-23.3,19.8-34.9C202.5,434.6,195.8,422.8,189.1,411.1z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M249.4,447.1c-13.3-0.3-26.7-0.6-40-0.7c-6.5,11.6-13.1,23.3-19.8,34.9c6.8,11.7,13.6,23.5,20.4,35.2c13.5,0,27,0.1,40.6,0.2c6.7-11.5,13.3-23,19.8-34.4C263.3,470.6,256.3,458.9,249.4,447.1z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M189.5,481.3c-13.5,0-26.9,0-40.4,0c-6.8,11.7-13.6,23.5-20.4,35.2c6.7,11.7,13.5,23.4,20.3,35.1c13.5,0,27,0,40.6,0c6.8-11.7,13.6-23.4,20.3-35.1C203.1,504.7,196.3,493,189.5,481.3z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M96,308.1c12.2-0.9,24.5-1.5,36.7-1.9c5.7,11.5,11.7,23,17.8,34.6c-6.5,11.8-13.1,23.6-19.8,35.5c-12.9,0.3-25.8,0.7-38.7,1.3c-5.9-11.3-11.6-22.5-17-33.5C82,332.1,89.1,320.1,96,308.1z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M37.1,347.4c12.6-1.3,25.2-2.4,37.8-3.3c5.5,11,11.1,22.2,17,33.5c-7,11.9-14.1,23.7-21.2,35.5c-13.1,0.6-26.3,1.3-39.4,2.1c-5.8-10.9-11.4-21.7-16.8-32.2C22.1,371.2,29.6,359.4,37.1,347.4z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M91.9,377.6c12.9-0.6,25.8-1,38.7-1.3c6.2,11.5,12.5,23.1,19,34.8c-6.7,11.8-13.5,23.5-20.3,35.3c-13.3,0.2-26.7,0.4-40,0.7c-6.4-11.4-12.6-22.7-18.6-34C77.8,401.4,84.9,389.5,91.9,377.6z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M89.3,447.1c13.3-0.3,26.7-0.6,40-0.7c6.5,11.6,13.1,23.3,19.8,34.9c-6.8,11.7-13.6,23.5-20.4,35.2c-13.5,0-27,0.1-40.6,0.2c-6.7-11.5-13.3-23-19.8-34.4C75.4,470.6,82.4,458.9,89.3,447.1z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M88.2,516.6c13.5-0.1,27-0.1,40.6-0.2c6.7,11.7,13.5,23.4,20.3,35.1c-6.7,11.7-13.5,23.4-20.1,35c-13.5-0.1-26.9-0.2-40.4-0.4c-6.9-11.7-13.8-23.3-20.6-34.9C74.6,539.8,81.4,528.2,88.2,516.6z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M433,549.4c-13.5,0.2-27,0.4-40.6,0.6c-6.9,10.8-14,21.8-21.2,32.9c6.3,10.6,12.3,21.1,18.2,31.3c13.3-0.9,26.7-1.9,40-3c7.7-10.8,15.2-21.5,22.6-31.9C445.9,569.6,439.5,559.6,433,549.4z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M189.6,551.5c-13.5,0-27,0-40.6,0c-6.7,11.7-13.5,23.4-20.1,35c6.8,11.7,13.6,23.5,20.4,35.2c13.3,0.1,26.7,0.1,40,0c6.7-11.7,13.6-23.5,20.4-35.2C203.1,574.9,196.4,563.2,189.6,551.5z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M27.4,550.9c13.5,0.1,27,0.2,40.6,0.3c6.8,11.5,13.7,23.2,20.6,34.9c-6.5,11.5-13,22.9-19.3,34.2c-13.3-0.4-26.7-0.9-40-1.5c-7.2-11.6-14.4-23.1-21.5-34.5C14.2,573.3,20.7,562.2,27.4,550.9z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M88.6,586.1c13.5,0.2,26.9,0.3,40.4,0.4c6.8,11.7,13.6,23.5,20.4,35.2c-6.6,11.7-13.1,23.3-19.4,34.9c-13.1-0.2-26.3-0.6-39.4-1c-7-11.8-14.1-23.6-21.1-35.3C75.6,609,82.1,597.6,88.6,586.1z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M29.3,618.8c13.3,0.6,26.7,1.1,40,1.5c7.1,11.7,14.1,23.5,21.1,35.3c-6.1,11.3-12.1,22.6-17.9,33.7c-12.9-0.7-25.8-1.6-38.7-2.7C26.4,674.8,19,663,11.6,651.4C17.3,640.7,23.2,629.8,29.3,618.8z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));
regions.push(rsr.path("M90.5,655.6c13.1,0.5,26.3,0.8,39.4,1c6.8,11.8,13.5,23.6,20.1,35.4c-6.3,11.6-12.5,23.2-18.4,34.7c-12.6-0.4-25.2-0.9-37.8-1.6c-7-11.9-14.1-23.9-21.2-35.8C78.3,678.2,84.3,666.9,90.5,655.6z").attr({class: 'cls-1',"data-name": 'Layer 4',parent: 'Layer_4','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_a'));

Layer_4.attr({'id': 'Layer_4','data-name': 'Layer 4','name': 'Layer_4'});
var rsrGroups = [Layer_4];

// Copy everything to Layer_4 and initiate states array
var states = [];
for(var i = 0; i < regions.length; i++) {
  var region = regions[i];

  // Change some stuff, 'cause I'm to lazy to ^F
  region.attr({"stroke-width":3});
  region.attr({"stroke":"black"});

  Layer_4.push(region);
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
console.log(regions.length);
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


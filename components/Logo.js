import styles from "./Logo.module.scss";

export default function Logo() {
    return (
        // BodhiMoto
        <svg className={styles.SVG} viewBox="0 0 68 20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M66.7741 1.30612C66.7741 0.979592 66.8558 0.734694 66.8558 0.571429C66.9375 0.408163 66.9375 0.244898 67.0193 0.163265C67.101 0.0816327 67.101 0 67.1827 0C67.2644 0 67.2644 0 67.3462 0H67.8366C67.9183 0 67.9183 0 67.9183 0V0.0816327V8.81633V8.89796H67.8366H67.5096C67.3462 8.89796 67.2644 8.89796 67.2644 8.81633C67.1827 8.73469 67.1827 8.65306 67.1827 8.57143L67.3462 2.28571L66.6923 8.65306C66.6923 8.73469 66.6106 8.81633 66.5289 8.89796C66.4471 8.97959 66.2837 8.97959 66.2019 8.97959C66.1202 8.97959 65.9567 8.97959 65.875 8.89796C65.7933 8.81633 65.7116 8.73469 65.7116 8.65306L65.0577 2.28571L65.2212 8.57143C65.2212 8.65306 65.2212 8.73469 65.1394 8.81633C65.1394 8.97959 65.0577 8.97959 64.8942 8.97959H64.5673C64.4856 8.97959 64.4856 8.97959 64.4856 8.97959V8.89796V0.163265V0.0816327H64.5673H64.976C65.0577 0.0816327 65.1394 0.0816327 65.1394 0.0816327C65.2212 0.0816327 65.3029 0.163265 65.3029 0.244898C65.3846 0.326531 65.3846 0.489796 65.4664 0.653061C65.5481 0.816326 65.5481 1.06122 65.5481 1.38776L66.2019 6.77551L66.7741 1.30612Z"
                fill="#1B1A1A"/>
            <path
                d="M67.6731 9.71429C67.7548 9.71429 67.8366 9.71429 67.9183 9.79592C68 9.87756 68 9.95919 68 10.0408V10.3674C68 10.449 68 10.449 68 10.449H67.9183H64.7308C64.6491 10.449 64.6491 10.449 64.5673 10.3674C64.4856 10.2857 64.4856 10.2857 64.4856 10.2041V9.79592C64.4856 9.71429 64.4856 9.71429 64.5673 9.63266C64.6491 9.55103 64.6491 9.55103 64.7308 9.55103H67.6731V9.71429Z"
                fill="#1B1A1A"/>
            <path
                d="M2.77885 0C3.1875 0 3.59615 0.0816327 3.92308 0.163265C4.25 0.244898 4.57692 0.408163 4.82212 0.653061C5.06731 0.897959 5.23077 1.14286 5.39423 1.46939C5.39423 1.71429 5.47596 2.12245 5.47596 2.44898V8.16327C5.47596 8.57143 5.39423 8.89796 5.23077 9.22449C5.06731 9.46939 4.82212 9.71429 4.57692 9.87755C4.90385 10.0408 5.06731 10.2857 5.23077 10.5306C5.39423 10.7755 5.47596 11.102 5.47596 11.5102V17.551C5.47596 18.2857 5.23077 18.9388 4.74039 19.3469C4.25 19.7551 3.59615 20 2.69712 20H0.245192C0.163462 20 0.0817308 20 0 19.9184C0 19.8367 0 19.7551 0 19.6735V0.326531C0 0.244898 0 0.163265 0.0817308 0.0816327C0.0817308 0 0.163462 0 0.326923 0H2.77885ZM3.59615 2.44898C3.59615 2.20408 3.51442 1.95918 3.43269 1.79592C3.35096 1.63265 3.02404 1.63265 2.77885 1.63265H1.96154V8.97959H2.77885C3.10577 8.97959 3.26923 8.89796 3.43269 8.73469C3.59615 8.57143 3.59615 8.40816 3.59615 8.08163V2.44898ZM3.59615 11.5102C3.59615 11.2653 3.51442 11.0204 3.43269 10.8571C3.35096 10.6939 3.02404 10.6122 2.77885 10.6122H1.96154V18.3673H2.77885C3.10577 18.3673 3.26923 18.2857 3.43269 18.1224C3.59615 17.9592 3.59615 17.7959 3.59615 17.4694V11.5102Z"
                fill="#1B1A1A"/>
            <path
                d="M13.8125 2.44898C13.8125 1.71429 14.0577 1.06122 14.5481 0.653061C14.9567 0.244898 15.6923 0 16.5096 0C16.9183 0 17.3269 0.0816327 17.6539 0.163265C17.9808 0.244898 18.3077 0.408163 18.5529 0.653061C18.7981 0.897959 18.9615 1.14286 19.125 1.38776C19.2885 1.71429 19.2885 2.04082 19.2885 2.44898V17.551C19.2885 18.2857 19.0433 18.9388 18.5529 19.3469C18.0625 19.7551 17.4087 20 16.5096 20C16.101 20 15.6923 19.9184 15.3654 19.8367C15.0385 19.7551 14.7115 19.5918 14.4664 19.3469C14.2212 19.102 14.0577 18.8571 13.8942 18.6122C13.7308 18.2857 13.7308 17.9592 13.7308 17.551V2.44898H13.8125ZM17.3269 2.44898C17.3269 2.20408 17.2452 1.95918 17.1635 1.79592C17 1.71429 16.8365 1.63265 16.5096 1.63265C16.2644 1.63265 16.0192 1.71429 15.8558 1.87755C15.6923 2.04082 15.6923 2.20408 15.6923 2.44898V17.551C15.6923 17.7959 15.774 18.0408 15.8558 18.2041C15.9375 18.3673 16.1827 18.449 16.5096 18.449C16.7548 18.449 17 18.3673 17.1635 18.2041C17.3269 18.0408 17.4087 17.8776 17.4087 17.551V2.44898H17.3269Z"
                fill="#1B1A1A"/>
            <path
                d="M30.3221 0C31.1394 0 31.7933 0.244898 32.3654 0.653061C32.8558 1.06122 33.101 1.71429 33.101 2.44898V17.551C33.101 18.2857 32.8558 18.9388 32.3654 19.3469C31.875 19.7551 31.2212 20 30.3221 20H27.8702C27.7885 20 27.7067 20 27.625 19.9184C27.5433 19.8367 27.5433 19.7551 27.5433 19.6735V0.326531C27.5433 0.244898 27.5433 0.163265 27.625 0.0816327C27.7067 0 27.7885 0 27.8702 0H30.3221ZM31.1394 2.44898C31.1394 2.20408 31.0577 1.95918 30.976 1.79592C30.8942 1.63265 30.649 1.63265 30.3221 1.63265H29.5048V18.449H30.3221C30.649 18.449 30.8125 18.3673 30.976 18.2041C31.1394 18.0408 31.1394 17.8776 31.1394 17.551V2.44898Z"
                fill="#1B1A1A"/>
            <path
                d="M42.4183 0C42.6635 0 42.8269 0.0816327 42.9904 0.163265C43.1539 0.244898 43.3173 0.489796 43.3173 0.734694V8.97959H44.9519V0.734694C44.9519 0.489796 45.0337 0.326531 45.1971 0.244898C45.3606 0.163265 45.5241 0 45.7692 0H46.5866C46.6683 0 46.75 0 46.8317 0.0816327C46.9135 0.163265 46.9135 0.244898 46.9135 0.326531V19.7551C46.9135 19.8367 46.9135 19.9184 46.8317 20C46.75 20.0816 46.75 20.0816 46.5866 20.0816H45.7692C45.5241 20.0816 45.2789 20 45.1154 19.8367C45.0337 19.5918 44.9519 19.4286 44.9519 19.1837V10.6122H43.3173V19.1837C43.3173 19.4286 43.2356 19.6735 43.0721 19.7551C42.9087 19.8367 42.7452 20 42.4183 20H41.601C41.5192 20 41.4375 20 41.3558 19.9184C41.274 19.8367 41.274 19.7551 41.274 19.6735V0.326531C41.274 0.244898 41.274 0.163265 41.3558 0.0816327C41.5192 0 41.5192 0 41.6827 0H42.4183Z"
                fill="#1B1A1A"/>
            <path
                d="M55.1683 0.734694C55.1683 0.489796 55.25 0.326531 55.4135 0.244898C55.5769 0.163265 55.7404 0 55.9856 0H56.8029C56.8846 0 56.9664 0 57.0481 0.0816327C57.1298 0.163265 57.1298 0.244898 57.1298 0.326531V19.5102C57.1298 19.6735 57.0481 19.7551 56.9663 19.8367C56.8846 19.9184 56.7212 20 56.6394 20H55.7404C55.5769 20 55.4952 19.9184 55.4135 19.8367C55.3317 19.7551 55.25 19.5918 55.25 19.5102V0.734694H55.1683Z"
                fill="#1B1A1A"/>
        </svg>


        // Piheinz
        // <svg className={styles.SVG} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2326 2726.87">
        //     <path
        //         d="M1310.7,58.4a43.46,43.46,0,0,0-16,11c-1.5,1.7-11.7,14.8-22.5,29.1s-26,33.6-33.6,43-14.9,18.8-15.9,20.9c-4.5,9.3-1.3,22.9,7.2,30.9,6.5,6.1,12.2,8.1,21.5,7.5,10.8-.7,14.3-3.2,27.3-18.9,13.9-16.9,33.2-41.7,38.6-49.6,2.3-3.4,4.5-6.3,4.8-6.3s4.1,5.7,8.4,12.7c11.4,18.6,33.2,51.4,43.2,65,4.7,6.5,28.7,37,53.3,67.8s50.6,63.9,58,73.5c16,21.1,34,43,38,46.4,7.1,5.9,22,8.9,31.2,6.2,7-2,16.3-8.8,21.6-15.7,24.9-32.5,59.5-87,73.5-115.6,6.6-13.7,7.1-15.1,7.1-21.3a28.35,28.35,0,0,0-38.3-26.5c-8.1,2.9-10.4,5.4-18.5,21.3-4.2,8.2-12.6,23.2-18.7,33.3-11.7,19.6-34.7,54.7-37,56.6-1.1.9-4.1-2.4-14.9-16.5-7.4-9.7-33.5-42.6-57.9-73.1-46.4-57.9-53.8-67.6-70.5-92.5-9.7-14.4-32.3-51.7-40-65.7-6.1-11.4-11.4-17-20.2-21.5-6.8-3.4-8.7-3.9-15.8-4.2C1317.9,56,1315.5,56.4,1310.7,58.4Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1918,216.2c-94.3,72.4-257.4,229.1-429.5,412.3-201.5,214.6-413.4,460.6-647.4,751.8-26.5,33-38.9,47.7-40.3,47.7-1,0-20.7-3.1-43.6-7-60.5-10.1-89.2-14-126.7-17.2-20.6-1.8-115.2-1.8-137.5,0-89.1,7.1-167.1,23-216.5,44.2-70.3,30.1-126.8,82-157.5,144.5-12.5,25.3-19,45.1-25.4,76.7-23.8,116.9-.3,226.8,71.5,334.5,30.8,46.3,58.5,80.1,98.8,120.4,35,35,61.9,57.7,102.1,86.4,70.2,50,133.4,88.3,208.7,126.4,19,9.6,22.1,13,36.6,39.4q108.45,198.6,278.2,300.4c92.5,55.6,202,90.3,322,102.3,59.7,5.9,99.9,5.4,158.5-2.1,36.1-4.6,42.9-5.7,65-10.6,59.6-13.2,117.1-33.3,168.1-58.9,8-4,17.2-8,20.4-8.9,9-2.7,20.3-2.2,42.5,1.9,66.5,12.1,117.9,18.9,162.5,21.7,37.6,2.3,98.4.3,142.5-4.7,103.9-11.7,192.7-40.5,271.3-88,95.5-57.6,150.1-139,166.4-247.9,2.8-18.7,2.5-62.9-.5-82.4-5.6-35.4-16.6-68-34.9-103.1-39.6-76-85.5-139.3-141.8-195.5a678.8,678.8,0,0,0-108.5-89.2c-18.9-12.5-79.2-49.9-93.5-57.9-7.7-4.3-14.1-7.8-14.3-7.9s-10.4-217.6-31.7-671.5c-31.4-670.7-45.6-971.6-45.8-972.1S1928.7,208,1918,216.2Zm-15.5,240.9c4.1,88.2,11.5,247.2,16.5,353.4s9.7,206.7,10.5,223.5,8.5,180.1,17,363c24,514.7,23.2,499.4,26,514.5,22.4,122.4,11.5,251-31,365-13.6,36.4-35,82-54.7,116.3-12.5,21.9-16,26.2-24.1,30.2-5.8,2.8-7.8,3.3-20.3,4.1-19.3,1.4-101.2,1.4-128.4,0a1756.39,1756.39,0,0,1-179.5-18.5c-28.1-4.4-55.6-9.4-56.4-10.2-1.3-1.3,16.5-17,23.4-20.5,9.3-4.8,13.8-5.7,34-6.3,26.3-.9,32.3-2.6,38.2-10.4,2.8-3.7,3.3-5.2,3.3-9.8,0-9.8-3.7-13.9-22.2-24.4-14.3-8.2-19.9-12.7-24.2-19.3-5.2-7.9-7-15.3-6.3-26.2,1.2-17.9,8.8-57.3,15.4-80,6.2-21,5.4-31.7-2.6-37-5.2-3.5-9.3-4.1-14.4-2.1-6.1,2.3-10.8,7.6-25.2,28.6-29.9,43.4-52.9,74.5-61.5,83-13.7,13.7-26,18.2-43,15.9-19.7-2.8-32,4.4-32,18.6,0,6.1,1.7,9,10.6,18.7a108.87,108.87,0,0,1,19.4,28.3c3.6,7.4,9.4,25,8.8,26.6-.4.8-35.3-7.3-74.8-17.4-101.2-25.9-205.6-60.9-351.5-117.7-135.1-52.6-193.4-77.7-271.5-116.7-45.1-22.5-59.1-29.9-95.4-50.6-26.3-15-32.3-19.4-35.9-26.1-2.1-3.9-2.2-5.1-2.1-30.6.4-114.7,33.2-234.4,92.3-337.2,30-52.2,63-95.6,109.1-143.8,11.8-12.3,25.4-28.4,45.9-54.3,122.9-155.2,260.5-322.4,379.5-461.2,241.4-281.6,468.8-522.1,646.1-683.6,23.6-21.4,52.7-47,53.1-46.6C1894.8,296.5,1898.3,368.8,1902.5,457.1Zm-1267,987.3c26.6,2.9,82.7,11,131.2,18.9l7.1,1.2-22.2,28c-20.1,25.4-22.5,28-25.4,28.3-1.8.2-12.8-1-24.5-2.7-45.4-6.4-67.6-8.2-113.4-8.8-60.7-.9-105.8,2.9-152.8,12.8s-93.8,27.9-123,47.4c-61.8,41.2-89.1,109.7-74,185,11,54.7,37.7,105.3,84.4,160,52.7,61.8,145.3,132.9,255,195.9,123.6,71,320.9,157.3,508.1,222.3,242.3,84.1,432.6,125.3,619.5,134.3,27.1,1.3,100,1.3,127,0,74.7-3.6,141-10.3,193.5-19.6,42.4-7.4,76.3-19.6,106.4-38.2,49.7-30.6,76.3-65.4,86.8-113.2,2-9.4,2.3-13.1,2.3-35.5,0-27.6-.9-34.3-7-58.1-17.4-66.9-61.4-128.5-135-188.9-11.8-9.7-44.2-34.3-51.8-39.3-6.5-4.3-6.8-5.7-8.2-34.6-.8-14.4-1.7-31.6-2-38.4l-.7-12.3,12.9,8.2c7,4.5,20.9,13.4,30.8,19.7,24.6,15.7,41.6,27.2,58.1,39.5q145.65,108.15,224.8,270.7c14.5,29.8,22.4,55.7,25.7,84.9,1.7,15.7.6,54.9-2.1,72.6-6.9,45.3-20.8,82.1-44,116.8-38.4,57.1-103.4,103.9-189.8,136.6A697.81,697.81,0,0,1,1968,2678c-33.1,3.7-47.3,4.4-85,4.4-36.1,0-52.6-.8-88-4-126.5-11.4-322.1-53.6-537.5-115.9-122.9-35.5-245.3-79.8-409-148-55.3-23-175-74.4-198-85-88.8-40.8-200.3-105.8-267.5-155.8-73.4-54.6-133.4-116.6-181.2-187.2-42.9-63.2-65.7-121.4-74.4-190-2.5-19.6-2.6-64.2-.1-84.5,9-73.1,28.6-118.5,69.7-161.4,32.6-34.1,75.3-60.1,126.5-77,48.1-15.9,119.4-26.7,201.5-30.6C553.4,1441.7,617.7,1442.5,635.5,1444.4Zm.5,107.1c18,1.4,50.3,4.8,59.3,6.2,3.4.5,3.6.7,2.5,2.3-.7,1-6.7,8.9-13.4,17.7-64.4,84.6-108.5,175.9-133.8,276.8-12.3,49.1-20.5,106.9-22.3,156.3-.3,10-1,18.5-1.5,18.8-1.8,1.2-33.3-19.3-58.9-38.2-83.9-62.2-137.3-120.2-168.4-182.9-23.3-46.9-30.6-92-21-128.9,7.4-28.5,23.5-51.9,48.5-70.7,18.4-13.9,56.8-31.9,86-40.4,30.7-8.9,83.1-16.7,128-18.9C556.8,1548.8,617.4,1550,636,1551.5Zm1434,504.1c41.8,37.9,68,71.1,88.1,111.9,23.8,48.4,30.1,95.2,17.7,133.9-8.4,26.6-30.1,52.3-59.7,70.6-35.6,22.1-74.7,34.3-134.8,42-21.7,2.8-62.6,7-63.1,6.5-.2-.2,2.6-5.6,6.2-11.9,53.7-93.5,87-200.4,97.1-311.6,1.4-15.7,3.5-58.7,3.5-73.3v-6.8l15.3,12.8C2048.6,2036.7,2062,2048.4,2070,2055.6Zm-583.1,226c.2,19.5,7.2,39.6,17.9,51.5l3.2,3.7-8.2,2.5c-17,5.4-31.8,16.1-50,36.4-6.1,6.8-11.3,12.3-11.7,12.3s-1.4-4.4-2.4-9.8c-2.2-12-7.9-29.4-14.1-42.6-2.6-5.5-4.5-10.1-4.3-10.2s4.8-2.6,10.3-5.3a130.71,130.71,0,0,0,17.9-10.8c9.4-7,24.5-22,33.6-33.3l6.4-8,.7,3.8A64.93,64.93,0,0,1,1486.9,2281.6ZM709.5,2398.8c24.8,10.4,58.3,24.7,74.5,31.7s44.1,19,62,26.6,34,14.6,35.9,15.5l3.3,1.5-4.9,5.2c-13.2,13.9-18,32-12,45.1,2.9,6.2,9.7,13.4,15.4,16.2,5.3,2.6,14.5,2.4,20.6-.3,9.5-4.4,24.2-21.3,27.2-31.7a43.33,43.33,0,0,0,1.5-10.2v-5.1l27.8,10.7c174.3,67.2,357,122.2,552.5,166.4,15.5,3.5,30.5,6.7,33.2,7.1,5,.7,9.5,2.8,9.5,4.4,0,1.3-26.4,12.7-47,20.4-60.5,22.6-123.6,35.6-192.5,39.7-19.9,1.2-63.5,1.3-65.2.2-.9-.5-.3-2.5,1.9-7,6.4-12.9,4.5-27.3-4.9-36.7-9.9-10-21.5-12.6-32-7.2-6.1,3.2-14.2,11-18.9,18.3-4,6.2-8.4,18.8-8.4,23.8,0,2.1-.5,3.6-1.2,3.6s-8.6-1.2-17.7-2.6a719.58,719.58,0,0,1-350.6-158.5c-26.8-22.4-62.2-58.2-86-86.9s-51.5-69.8-68.4-101.3c-4.8-8.8-5.1-9.6-2.9-8.8C663.4,2379.4,684.8,2388.3,709.5,2398.8Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1710.7,575.7c-5.9,2-13.1,8.2-15.8,13.5-8.6,16.9,5.3,37.9,25,37.8,15.9-.1,26.8-17.4,21.7-34.4C1737.3,578.3,1724.1,571,1710.7,575.7Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1686.5,731.4c-4.3,1.9-7,5.1-18.6,22.1-14.4,21.1-35.7,50.3-40,55-8.2,8.8-20.6,13.6-30.8,11.7-7.2-1.3-14.8.1-18.2,3.4-6.7,6.5-6.3,12.7,1.5,21.1,20.8,22.5,26,44.8,20,84.8-2.1,14.6-1.6,19.7,2.5,23.8,2.8,2.8,3.8,3.2,8.6,3.2,7.3,0,9-1.8,20.5-22.5,20.4-36.4,31.2-49.4,45.4-54.7,2.6-1,9.9-1.8,20.1-2.3,11-.5,17.2-1.2,19.7-2.3,7.6-3.2,10.3-13.6,5.2-19.7-1.5-1.7-7.4-5.9-13.1-9.2-6.3-3.7-11.9-7.8-14.3-10.6a29.12,29.12,0,0,1-7-17.9c0-8.1,6.5-42.6,11-58.4,4.9-17,3.7-24-4.6-27.5C1690.4,729.7,1690.3,729.7,1686.5,731.4Zm-23.4,91c1.4,10.1,4.1,17.6,9,24.6,2.1,3,3.5,5.7,3.1,6.1a28.39,28.39,0,0,1-5.8,2.3q-16.5,5.4-33.9,25.5c-6.9,8-7,8.1-7.7,5.4-.4-1.6-1.7-6.6-2.8-11.3a166.32,166.32,0,0,0-6.7-19.3c-2.5-5.9-4.4-10.9-4.2-11.1s2.4-1.1,4.9-2.2c11.1-4.8,26.1-17.4,37.3-31.2l5.2-6.4.2,4.8C1661.9,812.3,1662.5,818.1,1663.1,822.4Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1811.9,898.6c-2.8.8-6.8,3.3-9.8,6-12.4,11.2-14.9,24.8-7.4,39.9,3.5,7,17.3,20.4,24.7,24,11.2,5.5,21.1,4.4,29.5-3.1,7.4-6.7,10.6-13.8,10.6-24,0-7.2-.4-8.7-3.7-15.5a80.48,80.48,0,0,0-7.9-12.2c-7.8-9-21.3-16.8-28.7-16.6A31.48,31.48,0,0,0,1811.9,898.6Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1450.5,938.3c-8.4,3.3-13.4,10.1-14.2,19.5-1,10.5,5.9,21.1,15.6,24,5,1.6,6.7,1.5,13-.4,9.5-2.8,17.1-12.3,17.1-21.4,0-8-6.5-17.5-14.4-21.1C1463,936.8,1455.1,936.5,1450.5,938.3Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1622,1134.9c-10.3,3.2-17,11.6-17,21.3,0,8.8,7.7,19.5,16.7,23.4s20.8,1.2,27.1-6c4.2-4.8,5.3-7.8,5.3-14.3C1654.1,1142.8,1637.6,1130.2,1622,1134.9Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1300.2,1165.3c-2.9,1.3-11.1,12.3-32.7,43.5-9.4,13.6-17.8,24.8-19.1,25.4-1.8.9-4.9.2-16.1-3.5-7.6-2.5-19.2-5.9-25.8-7.6s-14-3.7-16.4-4.6c-5.5-1.9-10.4-1.9-14,0s-6.5,7.7-5.7,12,16.6,30.6,25.5,42.5c3.9,5.2,7.1,10.1,7.1,11s-2.6,6.3-5.8,12-10.2,18.1-15.4,27.5-10.1,18.7-10.8,20.8c-2.3,7.3,1.2,14.8,7.9,16.8,3.2.9,5.6.8,14.2-1a200.79,200.79,0,0,0,35.9-10.9c7.7-3.3,9.3-3.6,18-3.6,11.7,0,16.1,1.8,29.5,12.5,12.1,9.7,20.3,14.9,33,21.1,17.3,8.4,25.1,7.6,27.3-2.7,1-4.7-.7-19.1-4.8-40.6-2.5-13.2-2.5-17.5-.1-21.5,1.1-1.8,7.5-7.6,14.3-13,23.9-19,40.9-33.5,42.9-36.7a12.34,12.34,0,0,0-1.5-14.6c-3.1-3-3.6-3-43.6-1.7-20.1.7-23.8.6-25.4-.7-1.8-1.3-1.9-2.5-1.5-15.8.2-7.9.4-24.3.3-36.4-.1-18.5-.3-22.5-1.8-25.2A11.62,11.62,0,0,0,1300.2,1165.3Zm-3.7,66c0,38.6-.6,37.9,32.8,38.5,14.9.3,20.7.7,20.4,1.6-.2.6-8.4,7.6-18.3,15.6-25,20.2-24.8,19.7-19.9,52.4,1.4,9.3,2.3,17.1,2.1,17.4-.8.7-9.6-4.8-28.3-17.7-10.1-6.9-20.2-13.6-22.5-14.9-6.8-3.6-11.5-3-36.8,4.8-12.5,3.8-23.7,7-24.9,7-2.1,0-2.1-.1-.6-3.8s6.1-11.7,15.8-28c5.6-9.4,8.7-16.9,8.7-21-.1-3.8-3.2-10.3-8.3-17-6.5-8.5-13.7-19.2-13.7-20.4,0-2.1,10.3.2,27.9,6.2,9.7,3.3,18.6,6,19.8,6s3.8-1.4,5.8-3.1c3.1-2.7,24.6-30.8,35.5-46.1,1.8-2.7,3.6-4.5,3.9-4.2S1296.5,1216.9,1296.5,1231.3Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1810.3,1267.4c-12.3,3.9-19.7,14.3-19.6,27.6.2,16,12.7,28.6,28.3,28.5,10.8-.1,17.5-5,22.8-16.4,7.7-16.6.1-34.8-16.6-39.5C1818.3,1265.7,1816,1265.7,1810.3,1267.4Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1529.5,1342.9c-11,2.8-19.7,14.9-17.9,25.1,3,16.1,19.4,24.6,33.5,17.2,9.9-5.2,14.1-15.4,10.9-26.7-1.5-5.3-6.7-11.7-11.2-13.8C1540.6,1342.8,1533.4,1342,1529.5,1342.9Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1027.7,1471.4c-12.5,4.5-18.1,17.6-12.6,29.6,7.1,15.6,26.8,21.1,39.3,10.8,12.9-10.7,8.4-33.6-8-40.4C1042.2,1469.6,1032.7,1469.7,1027.7,1471.4Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1326.5,1596.4a27.71,27.71,0,0,0-15.5,31c2.4,11.8,11.5,20.3,22.9,21.3,14.6,1.3,26.1-11,26.1-28,0-8.7-2.4-15.2-7.6-20.3C1345.7,1593.6,1335.7,1592.1,1326.5,1596.4Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1665.1,1600.8c-2.1,1.1-4.5,3.8-6.2,6.8-2.3,4.1-9.9,27.5-16.5,50.8-2,7.3-5.1,10.6-9.7,10.6-1.9,0-9.9-1.4-17.8-3.1-24.9-5.4-33.6-4.3-37.9,4.6-3.6,7.3-2.2,13.6,4.1,18.9,4.7,3.9,8.6,5.3,25.3,8.7,8.3,1.6,16.1,3.7,17.4,4.5,3.2,2.1,2.9,5.7-2.8,27.6-6.8,26.5-11,47.7-11,55.2,0,10.2,5.6,16.6,15.3,17.4,6.8.5,11.6-1.6,15.2-6.8s4.6-8.7,12-42.9c7.1-32.5,9-39.7,10.7-40.7,2.4-1.5,8.9-.2,29.2,6.1,11.6,3.5,23.5,7,26.5,7.6,10.2,2.1,18.4-1,22-8.5,4.1-8.3,1.9-17.3-5.1-21.6-3.6-2.2-23.5-8.7-44.6-14.6-13-3.6-18.2-6.2-18.2-8.9,0-.8,2.5-9.1,5.4-18.5,7.3-22.7,8.9-30.4,8.4-39.5-.3-6.2-.7-7.8-2.8-10.1C1679,1599,1671.2,1597.5,1665.1,1600.8Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M741.3,1659c-6.9,2.8-12.8,8.7-16.6,16.8-3.1,6.4-3.2,7.3-3.2,18.7.1,19.6,5,31,15.9,36.8,5.5,2.9,15.9,2.9,23.6-.1,5.9-2.3,13.1-8.5,15.7-13.6,10.6-20.4,6-50-9-57.8C761.6,1656.6,748.4,1656.2,741.3,1659Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1081.5,1794.8a43.31,43.31,0,0,0-18.8,12.2c-11.5,12.8-7.2,29.9,9.2,36.1,12.8,4.8,30.8-1.5,39.5-13.9,7.6-10.8,2.5-28.7-9.9-34.3C1096.4,1792.6,1088,1792.5,1081.5,1794.8Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M870.2,1862.5c-5.1,4.2-16.9,35.9-15.8,42,.9,4.8,4.6,7.7,10.5,8.3,4.5.4,5.3.2,7.9-2.4,2.8-2.9,11.1-22.3,14.7-34.6,1.4-5,1.4-6,.1-9.2C884.9,1860,875.7,1857.9,870.2,1862.5Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1264.2,1882.7c-6.3,2.2-13.5,9.7-15.7,16.2-7,21.3,10.6,41.9,30.7,35.9,12.8-3.8,20.5-20.6,16.3-35.5C1291.4,1884.6,1278.3,1877.7,1264.2,1882.7Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1673.1,1911.7c-2.6.9-6.7,3.7-9.7,6.7-10.3,10-10.8,24.2-1.2,35.1,7.8,9,22.4,11.9,31.9,6.3,8.2-4.8,12.5-13.8,11.7-24.7C1704.4,1916.5,1689.6,1905.9,1673.1,1911.7Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M771.2,1918.4c-5.9,3.2-8.2,12.8-4.2,17.9a20.7,20.7,0,0,0,6.4,4.6c5.1,2.5,27.5,7.1,30.9,6.4,6.5-1.4,9.7-5.3,9.7-11.8,0-5.4-4-8.9-13.1-11.5-4.1-1.2-11.1-3.2-15.5-4.6C776.1,1916.7,774.4,1916.5,771.2,1918.4Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M844,1927.1c-6.2,2.5-11,9.4-11,15.9,0,12.8,12.7,19.7,23.3,12.6,4.9-3.3,7.7-8.2,7.7-13.5C864,1930.7,854,1923.2,844,1927.1Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M883.4,1955.9c-3.6,2.2-5.8,7.5-4.9,11.4,1.2,4.5,6.9,8.6,24,16.8,17.9,8.6,23.8,10.2,29.4,7.9,7.6-3.1,8.6-12.6,2-18.7-4.7-4.3-39.3-19.3-44.5-19.3A14.44,14.44,0,0,0,883.4,1955.9Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M822.7,1976c-5.2,6.1-12.4,28.8-13.4,42-.5,7-.4,7.8,1.9,10.4,3.2,3.7,11.1,4.8,15.2,2.1s5-5.3,10.6-27.4c4.7-18.9,4.9-20.3,3.6-23.5-1.7-4.1-6-6.6-11.5-6.6C826,1973,824.7,1973.6,822.7,1976Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1129,2160.9c-14.1,4.6-29,22.9-32,39.1-1.9,10.3,1.3,20.1,9.1,27.9,9.3,9.3,18.7,10.9,30.3,5.2,9.8-4.8,22.3-19.4,26-30.4,2.1-6.2,2-16-.1-22.3-2-5.9-9.7-14-16.4-17.2C1140.7,2160.7,1132.8,2159.6,1129,2160.9Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1775.8,2233.9c-8.1,2.6-17.7,12.2-20.4,20.3-2.4,7.4-1.6,17.9,2.1,25.4,3.9,7.9,16.5,20.3,25,24.5,12.6,6.2,21.5,5,30.6-4,14.9-14.9,12.8-35.5-5.5-53.7C1796.8,2235.7,1784.9,2231,1775.8,2233.9Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1221.9,269c-12,2.5-20.7,6.9-28.8,14.5-11.1,10.5-15.9,21.6-17,38.8l-.6,10.8-5.3-4.5c-6.1-5.3-11.3-7-19.4-6.4-11.9.9-20.8,10.1-21.6,22.5-.7,10.3.7,13,14.3,27.5,14.6,15.6,25.2,24.9,59.5,52.3,42.6,34,72.4,60,85.1,74.1,24,26.6,33,36.2,44.7,47,17.3,16.1,27.4,22.6,42.7,27.3,14.3,4.5,21.9,2.7,26.5-6.4,2.2-4.4,2.5-6.3,2.5-15.5,0-12-1.4-16.3-5.5-16.8-1.7-.2-10.3-8-26.5-24-13.2-13-30.9-30.5-39.4-38.7-21.1-20.7-60.9-64.2-78.2-85.7-19.6-24.3-28.9-42.9-29.1-57.9-.1-5.2.3-6.5,2.1-8,10.8-8.8,43.9,5.6,77.1,33.6,6.3,5.3,32.4,30.7,58,56.4,49.8,50.1,80.5,79.2,87.2,82.8,2.9,1.7,5.8,2.3,10.1,2.3,11.7,0,18.6-4,23.3-13.6,2.3-4.8,2.6-6.3,2.2-12.4-.4-4.8-1.2-8-2.9-10.8-1.3-2.2-13.6-14.5-27.4-27.4s-40.4-39.3-59.3-58.6c-51.8-53-78.9-75.7-108.2-90.6-12.8-6.5-25.6-11-37.4-13.1C1239.3,266.6,1232.7,266.7,1221.9,269Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1047,381.6c-4.4,1.9-10.6,7.8-13,12.4-5,9.7-3,20.4,5.3,28.5,5.7,5.5,10.5,7.5,18.2,7.5,7,0,12.1-1.9,17.1-6.3,6.4-5.7,8.8-10.7,8.8-18.7a25.3,25.3,0,0,0-14.9-23.1C1063.5,379.6,1052,379.4,1047,381.6Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M1106.8,436.5c-10.3,3.3-17.7,15-16.5,26.1.9,8.3,3.2,11.8,15.9,23.7,18.6,17.4,163.3,164.2,168.1,170.5,5.6,7.4,11.4,10.4,20.1,10.4,14.4,0,24.7-10.1,24.9-24.4.1-9.7-3.9-15.9-22.7-35.6-27.8-29.2-140.5-142.8-154.4-155.7-7.3-6.7-14.8-13-16.8-14C1120.4,435.2,1112.4,434.7,1106.8,436.5Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M974,522.2c-23,2.6-42.9,27.3-44.7,55.8-1.7,26.1,12.7,57.7,42.9,94,11.6,13.9,44,47,62.1,63.3,16.6,15,40.9,35.2,56.3,46.8,34.8,26.1,55.8,36,76.4,36,15.1.1,25.8-4.7,36.4-16.2,10.4-11.2,14.5-23.4,15.3-45,.6-16.5-.6-27.8-4.3-40.5-3-10.4-11.2-29.1-15.6-35.5-10.8-15.9-34.2-15.1-42.7,1.6-2.1,3.9-2.6,6.4-2.6,12,0,6.5.4,7.8,5.7,18.5,8,16.2,9,19.5,9.5,34,.6,14.9-.6,21-4,21-11.8,0-65.1-39.8-109.9-82.1l-13.7-13,15.3-15.2c17.1-17.1,30.6-33.4,34.5-41.7,3.6-7.6,3.7-20.7.2-29.4-5.5-13.7-34-36.8-64.3-52.2C1008.4,525.1,988.7,520.5,974,522.2ZM997.5,576c12.4,5.2,41.5,23.6,41.5,26.3,0,3.7-29.8,33.4-32.4,32.4-1.7-.7-13.1-16.9-18.2-25.8-7.9-14-10.9-26.3-8-33.3,1.6-3.8,1.7-3.8,5.8-3.2A77.29,77.29,0,0,1,997.5,576Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M766.7,707.1c-17.4,4.2-26.5,22.6-18.7,37.9,5.5,10.8,134.9,140.1,188.8,188.7,33.3,30,40,36.4,49.3,47,11.7,13.4,15.7,15.8,26.4,15.8,9.4,0,14-2,19.9-8.5,5.1-5.7,6.9-10.2,6.9-18,.1-9.2-2.7-13.9-19.4-31.3-11.3-11.8-42.5-41.2-56.3-52.8l-2.8-2.5,2-12.8c2.4-15.1,5.5-22.4,11-26.1,4.4-3,7.5-3.1,14.2-.6,12.6,4.8,41.6,27.7,66.4,52.4,9.9,9.8,19.7,18.8,22,19.9,2.9,1.5,6,2.1,10.6,2.1,15.6.1,27-10.9,27-26.3,0-10.5-2.3-14-22.2-33.6-20.7-20.4-31-29.4-48.3-42.4-21.9-16.5-36.1-23.4-53.6-26.1-11.9-1.8-27.1.6-37.9,6.1-12.5,6.4-24.6,19.3-32,34.4l-4.9,9.9-14.3-14c-23.2-22.8-70.8-71.2-92.7-94-13.6-14.3-21.6-21.8-24.4-23.2C778.5,706.7,771.7,705.8,766.7,707.1Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M669,828.9c-11.8,2.5-20.6,14.8-18.5,25.8,4.7,25,40.6,26,46.5,1.3C700.8,840.2,685.5,825.4,669,828.9Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M719.5,877.9c-5.1,2.3-11.1,8.9-12.4,13.8-3,10.8.3,19.2,11.2,28,11.9,9.6,31.7,27.2,61.2,54.2C794.9,988,815.8,1007,826,1016c24.3,21.7,45.8,41.7,54.5,50.7,7.9,8.1,12.1,10.3,19.5,10.3,16.8,0,27.4-17.2,20-32.5-3.3-6.9-20.7-23.9-64-62.5-10.2-9-29.1-26.1-42-38-50.4-46.2-69.8-63-76.5-66.1A23.4,23.4,0,0,0,719.5,877.9Z"
        //         transform="translate(-84.63 -56.15)"/>
        //     <path
        //         d="M594.3,949c-19.5,5.1-39,18.2-49.8,33.4-9.9,14.1-14.3,26.9-15.2,44.7l-.6,11.6-4.1,1.1c-9.7,2.6-18.6,15.2-18.6,26.4,0,6.4,1.9,12,5.3,15.6,1.2,1.3,6.7,4.9,12.2,7.9,23.2,13,34.8,20.8,43.9,29.4,20.5,19.6,50,42.5,81.6,63.4,21,14,35.6,22.5,65,37.9,11.2,6,22.3,12.3,24.5,14.2,5.9,4.8,14.8,8.6,20.3,8.7,8.5.1,14.9-4.9,20.7-16.3,6.3-12.5,8.3-24.9,5-32.6-1.6-3.9-7.3-7-15.3-8.3-3.6-.6-9.1-3.6-23.2-12.6-13.5-8.6-76.4-50.1-78.7-52-.2-.1,2.7-4.6,6.3-10,11-16.5,18.6-34,22-50.5,2.1-10.8,1.5-29.8-1.5-41.2C681.5,971.1,635.2,938.3,594.3,949Zm21.5,50.5c13.3,6.1,22.7,15.6,28.9,29.1,10,21.8,6.8,37.2-13.8,66.7-.4.5-9.1-4.7-19.5-11.6-20.8-13.7-21.9-14.9-28.4-30.3-3.7-9-7.3-26.4-6.8-33.1s4.8-13.6,11.2-18C597.2,995.6,605.5,994.8,615.8,999.5Z"
        //         transform="translate(-84.63 -56.15)"/>
        // </svg>
    )
}
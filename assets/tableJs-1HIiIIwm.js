document.addEventListener("DOMContentLoaded",function(){const a=document.getElementById("theme-toggle"),e=document.body,s=a.querySelector(".moonSvg"),o=a.querySelector(".sunSvg");a.addEventListener("click",()=>{e.classList.toggle("dark"),s.style.display=e.classList.contains("dark")?"none":"block",o.style.display=e.classList.contains("dark")?"block":"none";const r=e.classList.contains("dark");localStorage.setItem("dark",r.toString())});const t=localStorage.getItem("dark");(t==="true"||t==="false")&&(e.classList.toggle("dark",t==="true"),s.style.display=t==="true"?"none":"block",o.style.display=t==="true"?"block":"none");const n=JSON.parse(localStorage.getItem("registeredUsers"))||[],d=document.getElementById("userData");if(n.length>0){const r=c(n);d.innerHTML=r}else d.textContent="No registered users yet."});function c(a){const e=`
        <table class="min-w-full divide-y text-center divide-gray-200 dark:divide-gray-700">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        IP Address
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Registration Date
                    </th>
                </tr>
            </thead>
            <tbody>
    `,s=a.map(t=>`
        <tr class="odd:bg-white odd:dark:bg-gray-900  even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td class="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white">
                ${t.email}
            </td>
            <td class="px-6 py-4 text-center">
                ${t.ip}
            </td>
            <td class="px-6 py-4 text-center">
                ${t.registrationDate}
            </td>
        </tr>
    `).join("");return e+s+`
            </tbody>
        </table>
    `}

import React, { useState } from 'react'
import {Link, NavLink} from "react-router-dom"
import logo from "../../../assets/logo/logo.svg"
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { TbFileTextFilled } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { FaUndo } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import logoOnDark from ../../../assets/logo/logo-on-dark;
import { MdLogout } from "react-icons/md";

const ASIDEMENUS = {
    patient: {
        heading: "my health",
        items: [
            {to: "/patient", label: "overview", icon: CiHome},
            {to: "/doctors", label: "Find a doctor", icon: FaSearch},
            {to: "/patient/appointments", label: "My appointments", icon: CiCalendar},
            {to: "/patient/notes", label: "Visit notes", icon: TbFileTextFilled },
            {to: "/patient/payments", label: "payments", icon: MdOutlinePayment},
        ]
    },
    doctor: {
        heading: "Doctor workspace",
        items: [cd
            {to: "/doctor", label: "overview", icon: CiHome },
            {to: "/doctor/schedule", label: "Schedule", icon: CiCalendar},
            {to: "/doctor/profile", label: "Profile $ availability", icon: FaRegClock},
            {to: "/doctor/notes", label: "Visit notes", icon: TbFileTextFilled },
            {to: "/doctor/earnings", label: "Earnings", icon: GiMoneyStack },
        ]
    },
    admin: {
        heading: "Admin",
        items: [
            {to: "/admin", label: "overview", icon: CiHome },
            {to: "/admin/doctor", label: "Doctor approvals", icon: FaStethoscope, notificationBadge: "pendingDoctors" },
            {to: "/admin/users", label: "Users", icon: FiUsers },
            {to: "/admin/appointments", label: "Appointmentss", icon: CiCalendar},
            {to: "/admin/payments", label: "Payments $ refunds", icon: FaUndo, notificationBadge: "refundsNeeded"},
            {to: "/admin/revenue", label: "Revenue", icon: FaChartLine},
        ]
    },
}
const ROLE_LABEL ={
    patient:"Patient",
    doctor: "Doctor",
    admin: "Administrator"
}

function DashboardLayout(role) {
    const [open, setopen] = useState(false);
    const menu = ASIDEMENUS[role]
    
  return (
    <div className="dash">
        <header className="dash-topbar">
            <Link to={"/"} className="dash-logo">
            <img src="{logo}" alt="Carebook logo" />
            </Link>
            <button className="dash-menu-btn">
                {open ? <IoClose /> : <IoIosMenu/>}
            </button>
        </header>
        <aside id = "dash-sidebar" className={`dash-side ${open ? 'open' : ''}`}>
            <Link to={'/'} className='dash-logo'>
            <img src={logoOnDark} alt="Carebook logo" />
            </Link>
    <p className="dash-side-heading">{menu.heading}</p>
    <nav className="dash-nav">{
        menu.items.map((item) => {
            const MenuIcon = item.icon;
            return (
                <NavLink to={item.to} key={item.to}>
                    {MenuIcon && <MenuIcon size={18}/>}
                    <span>{item.label}</span>
                </NavLink>
            )
        })
        }
    </nav>
    <button className="dash-logout">
        <MdLogout/>
        <span className="sr-only">Log out</span>
    </button>
    </aside>
    <main className="dash-main">

    </main>
    </div>
  )
}

export default DashboardLayout
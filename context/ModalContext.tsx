"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
	isOpen: boolean;
	modalType: "presentation" | "contact" | null;
	open: (type: "presentation" | "contact") => void;
	close: () => void;
	toggle: (type: "presentation" | "contact") => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalType, setModalType] = useState<"presentation" | "contact" | null>(
		null
	);

	const open = (type: "presentation" | "contact") => {
		setModalType(type);
		setIsOpen(true);
	};

	const close = () => {
		setIsOpen(false);
		setModalType(null);
	};

	const toggle = (type: "presentation" | "contact") => {
		if (isOpen && modalType === type) {
			close();
		} else {
			open(type);
		}
	};

	return (
		<ModalContext.Provider value={{ isOpen, modalType, open, close, toggle }}>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = (): ModalContextType => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};

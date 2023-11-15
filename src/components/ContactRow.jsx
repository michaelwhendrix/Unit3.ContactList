import {contacts} from "./ContactList"

export default function ContactRow({contacts) {
    return (
            <tr>
                <td>{contacts.name}</td>
                <td>{contacts.phone}</td>
                <td>{contacts.email}</td>
            </tr>
    )
}
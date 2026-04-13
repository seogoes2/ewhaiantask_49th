import Card from './Card';

function ProfileCard(props) {
    return (
        <Card title="김민서" backgroundColor="#4ea04e">
            <p>안녕하세요, 저는 김민서입니다.</p>
            <p>저는 리액트를 공부하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;